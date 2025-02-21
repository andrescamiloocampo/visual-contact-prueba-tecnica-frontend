'use client'

import { type ReactElement } from "react";
import styles from "./FilterTag.module.css";
import type { FilterTagModel } from "./FilterTag.model";

export const FilterTag = ({
  action = () => {},
  active = false,
  text = "none",
}: FilterTagModel): ReactElement => {
    return (
        <div className={`${(active)?styles.active_tag:''} ${styles.filter_tag_container}`} onClick={action}>
            {text}
        </div>
    );
};
