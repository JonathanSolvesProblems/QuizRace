/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.10.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as common from "../common.js";
import type * as players from "../players.js";
import type * as questions from "../questions.js";
import type * as rooms from "../rooms.js";
import type * as unit_tests_test_functions_players from "../unit_tests/test_functions/players.js";
import type * as unit_tests_test_functions_questions from "../unit_tests/test_functions/questions.js";
import type * as unit_tests_test_functions_rooms from "../unit_tests/test_functions/rooms.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  common: typeof common;
  players: typeof players;
  questions: typeof questions;
  rooms: typeof rooms;
  "unit_tests/test_functions/players": typeof unit_tests_test_functions_players;
  "unit_tests/test_functions/questions": typeof unit_tests_test_functions_questions;
  "unit_tests/test_functions/rooms": typeof unit_tests_test_functions_rooms;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;