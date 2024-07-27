"use client";

import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

interface Step {
  name: string;
  command: string;
}

interface Env {
  name: string;
  value: string;
}

export default function Developer() {
  const [steps, setSteps] = useState<Step[]>([{ name: "", command: "" }]);
  const [envs, setEnvs] = useState<Env[]>([{ name: "", value: "" }]);

  const addStep = () => {
    setSteps([...steps, { name: "", command: "" }]);
  };

  const handleStepChange = (
    index: number,
    field: keyof Step,
    value: string,
  ) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const addEnv = () => {
    setEnvs([...envs, { name: "", value: "" }]);
  };

  const handleEnvChange = (index: number, field: keyof Env, value: string) => {
    const newEnvs = [...envs];
    newEnvs[index][field] = value;
    setEnvs(newEnvs);
  };

  return (
    <main className="flex flex-col font-helvetica min-h-screen w-full">
      <section className="w-full h-1/2 p-2">
        <Link
          className="text-black underline font-mono absolute text-left"
          href="/"
        >
          Home
        </Link>
      </section>
      <section className="w-full mt-5">
        <form className="flex flex-col min-h-screen items-center p-10">
          <h1 className="text-4xl font-bold">Configure ⚙️</h1>
          <section className="flex flex-row w-full justify-between">
            <section className="flex flex-col w-1/2 p-5">
              <section className="flex flex-col mt-5">
                <h2 className="text-2xl font-bold">Project Config</h2>
                <label
                  htmlFor="projectName"
                  className="block mt-5 text-gray-900 dark:text-white"
                >
                  Project Name
                  <input
                    type="text"
                    id="projectName"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="My Project"
                    required
                  />
                </label>
                <label
                  htmlFor="projectHome"
                  className="block mt-5 text-gray-900 dark:text-white"
                >
                  Project Home
                  <input
                    type="text"
                    id="projectHome"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="/tmp/test/"
                    required
                  />
                </label>
                <label
                  htmlFor="projectLog"
                  className="block mt-5 text-gray-900 dark:text-white"
                >
                  Project Log
                  <input
                    type="text"
                    id="projectLog"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="/tmp/testLog/"
                    required
                  />
                </label>
              </section>
              <section className="flex flex-col mt-5">
                <h2 className="text-2xl font-bold">Requirements Config</h2>
                <section>
                  <label
                    htmlFor="requirements"
                    className="block mt-5 text-gray-900 dark:text-white"
                  >
                    Requirement Name
                    <select
                      name="requirements"
                      id="requirements"
                      aria-label="Requirement Name"
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="node">node</option>
                      <option value="python"> python</option>
                      <option value="python3">python3</option>
                    </select>
                  </label>
                  <label
                    htmlFor="requirements"
                    className="block mt-5 text-gray-900 dark:text-white"
                  >
                    Requirement Version
                    <select
                      name="requirements"
                      id="requirements"
                      aria-label="Requirement Version"
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </select>
                  </label>
                </section>
              </section>
              <section className="flex flex-col mt-5">
                <h2 className="text-2xl font-bold">Run Config</h2>
                <label
                  htmlFor="runName"
                  className="block mt-5 text-gray-900 dark:text-white"
                >
                  Run Name
                  <input
                    type="text"
                    id="runName"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="My Project"
                    required
                  />
                </label>
                <label
                  htmlFor="runCMD"
                  className="block mt-5 text-gray-900 dark:text-white"
                >
                  Run Command
                  <input
                    type="text"
                    id="runCMD"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="/tmp/test/"
                    required
                  />
                </label>
              </section>
            </section>
            <section className="flex flex-col mt-5 w-1/2 p-5">
              <section className="flex flex-row justify-between items-center">
                <h2 className="text-2xl font-bold">Build Steps</h2>
                <button
                  type="button"
                  onClick={addStep}
                  className="bg-black text-white rounded p-2 w-1/4"
                >
                  Add Step
                </button>
              </section>
              {steps.map((step, index) => (
                <section key={index}>
                  <label
                    htmlFor={`stepName-${index}`}
                    className="block mt-5 text-gray-900 dark:text-white"
                  >
                    Step Name
                    <input
                      type="text"
                      id={`stepName-${index}`}
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="this does this"
                      value={step.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleStepChange(index, "name", e.target.value)
                      }
                      required
                    />
                  </label>
                  <label
                    htmlFor={`stepCommand-${index}`}
                    className="block mt-5 text-gray-900 dark:text-white"
                  >
                    Build Command
                    <input
                      type="text"
                      id={`stepCommand-${index}`}
                      className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="run this"
                      value={step.command}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleStepChange(index, "command", e.target.value)
                      }
                      required
                    />
                  </label>
                </section>
              ))}
              <section className="flex flex-col mt-5">
                <section className="flex flex-row justify-between items-center">
                  <h2 className="text-2xl font-bold">Environment Variables</h2>
                  <button
                    type="button"
                    onClick={addEnv}
                    className="bg-black text-white rounded p-2 w-1/4"
                  >
                    Add Env
                  </button>
                </section>
                {envs.map((env, index) => (
                  <section key={index}>
                    <label
                      htmlFor={`envName-${index}`}
                      className="block mt-5 text-gray-900 dark:text-white"
                    >
                      Env Name
                      <input
                        type="text"
                        id={`envName-${index}`}
                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ENV_VAR_NAME"
                        value={env.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleEnvChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </label>
                    <label
                      htmlFor={`envValue-${index}`}
                      className="block mt-5 text-gray-900 dark:text-white"
                    >
                      Env Value
                      <input
                        type="text"
                        id={`envValue-${index}`}
                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="value"
                        value={env.value}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleEnvChange(index, "value", e.target.value)
                        }
                        required
                      />
                    </label>
                  </section>
                ))}
              </section>
            </section>
          </section>
          <button
            type="submit"
            className="bg-black rounded text-white p-2 m-2 w-1/4"
          >
            {" "}
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
