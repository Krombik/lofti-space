import { BreakpointObj, ThemeProps } from "types";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

type RV = string | number;

type Value<Props> =
  | RV
  | any[]
  | ((props: Props) => RV)
  | { [key: string]: Value<Props> | undefined };

type Func<Props> =
  | ((value: any, props: Props) => RV)
  | { [key: string]: Func<Props> };

type VariableBreakpointObj<P> = BreakpointObj<Value<P>> & {
  func?: Func<P>;
};

type PropsWithTheme<P> = Omit<P, "theme"> & ThemeProps;

const objToCssVariable = <Props>(
  props: Props,
  obj: Value<Props>,
  func: Func<Props>,
  prevKey: string
): string =>
  Object.entries(obj).reduce(
    (acc, curr) => `${acc}${
      typeof curr[1] !== "object" || Array.isArray(curr[1])
        ? `--${prevKey + curr[0]}: ${
            typeof curr[1] !== "function"
              ? func[curr[0]]
                ? func[curr[0]](curr[1], props)
                : curr[1]
              : curr[1](props)
          };`
        : objToCssVariable(
            props,
            curr[1],
            func[curr[0]] || {},
            prevKey + curr[0] + "-"
          )
    };
`,
    ""
  );

const makeResponsiveVariables = <P>(
  obj: {
    [key: string]: VariableBreakpointObj<PropsWithTheme<P>>;
  },
  global?: boolean,
  prefix = ""
) => {
  const responsive: VariableBreakpointObj<any> = Object.entries(obj).reduce(
    (acc, variableName) => ({
      ...acc,
      ...Object.entries(variableName[1] as any).reduce(
        (obj, breakpoint) => ({
          ...obj,
          [breakpoint[0]]: acc[breakpoint[0]]
            ? { ...acc[breakpoint[0]], [variableName[0]]: breakpoint[1] }
            : { [variableName[0]]: breakpoint[1] },
        }),
        {}
      ),
    }),
    {}
  );
  return (props: PropsWithTheme<P>) =>
    props.theme.breakpoints.keys
      .filter((breakpoint) => responsive[breakpoint] !== undefined)
      .reduce(
        (
          acc,
          breakpoint,
          index,
          breakpoints
        ) => `${acc}${props.theme.breakpoints.between(
          breakpoint,
          breakpoints[index + 1]
            ? props.theme.breakpoints.values[breakpoints[index + 1]] - 0.05
            : "xl"
        )} {
            ${objToCssVariable(
              props,
              responsive[breakpoint] as NonNullable<
                VariableBreakpointObj<any>[Breakpoint]
              >,
              responsive.func || {},
              prefix
            )}
          }
        `,
        global ? "html:root:not(&) {" : ""
      ) + (global ? "}" : "");
};

export default makeResponsiveVariables;
