import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const testEnvironment = "node";
const transform = {
	...tsJestTransformCfg,
};

export default {
	testEnvironment,
	transform
}
