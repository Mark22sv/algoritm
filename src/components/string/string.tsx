import React, { useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import styles from "./string.module.css";
import { Circle } from "../ui/circle/circle";
import { ElementStates } from "../../types/element-states";
import { StringCircle } from "../../types/string";
import { reverseString } from "../../utils/string";

export const StringComponent: React.FC = () => {
  const [string, setString] = useState<StringCircle[]>([]);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setString(
      e.target.value.split("").map((value: string) => {
        return { value, state: ElementStates.Default };
      })
    );
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    reverseString(string, setString).then(() => setLoading(false));
  };

  return (
    <SolutionLayout title="Строка">
      <div className={styles.page}>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            extraClass={styles.input}
            placeholder="Ввведите текст"
            type="text"
            maxLength={11}
            isLimitText={true}
            onChange={changeHandler}
          ></Input>
          <Button
            extraClass={styles.button}
            text="Развернуть"
            type="submit"
            isLoader={loading}
            disabled={loading || !string}
          ></Button>
        </form>
        <ul className={styles.circles}>
          {string ? (
            string.map((letter, index) => (
              <Circle
                extraClass={"mr-8"}
                state={letter.state}
                key={index}
                letter={letter.value}
              />
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </SolutionLayout>
  );
};
