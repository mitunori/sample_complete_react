import React from "react";
import styles from "./style.module.scss";

const News = () => {
  return (
    <>
      <div className={styles.news}>
        <dl>
          <dt>2025.07.06</dt>
          <dd>変更されるチェック、自動更新</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>問い合わせあり</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>未返信</dd>
        </dl>
        <dl>
          <dt>2024.xx.</dt>
          <dd>重要項目未確認</dd>
        </dl>
      </div>
    </>
  );
};

export default News;
