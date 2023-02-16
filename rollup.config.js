import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/sky-reactivity-react.ts",
	external: ["sky-reactivity"],
	output: [
		{
			file: "dist/sky-reactivity-react.esnext.mjs",
			format: "esm"
		}
	],
	plugins: [
		typescript()
	]
};
