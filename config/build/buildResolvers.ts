import webpack from "webpack";

/** Расширения, которые опускаются при импорте */
export function BuildResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}