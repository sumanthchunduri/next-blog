import React from "react";
import { Code } from "bright";

import theme from "./theme";
import styles from "./CodeSnippet.module.css";

function CodeSnippet(props: React.PropsWithoutRef<{ string: string }>) {
  return <Code {...props} theme={theme} className={styles.wrapper} />;
}

export default CodeSnippet;
