import React from "react";
import * as ReactDOM from "react-dom";

window.CismuPluginAPI = {
  React: React,
  ReactDOM: ReactDOM,
  CismuAPI: window.api,
};

export function load() {
  console.log("Peligro");
}
