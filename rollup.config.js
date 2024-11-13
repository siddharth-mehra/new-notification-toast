import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "new-notification-toast",
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "tsconfig.json" }),
  ],
  onwarn: (warning, warn) => { // Suppress "use client" warnings 
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client'))
         { 
            return; 
         }
     warn(warning); 
     // Handle all other warnings normally 
     },
};
