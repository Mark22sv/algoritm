import React, { ChangeEvent, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { fibonacci } from "../../utils/fibonacci";
import styles from "./fibonacci-page.module.css";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const FibonacciPage: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [fibonacciArr, setFibonacciArr] = useState<number[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(+e.target.value);
  };

  const onClick = () => {
    setLoading(true);
    if (number) {
      fibonacci(number, setFibonacciArr).then(() => setLoading(false));
    }
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className={styles.wrapper}>
        <div className={styles.input}>
          <Input
            placeholder={"Введите число"}
            value={number && number <= 19 ? number : ""}
            onChange={onChange}
            isLimitText={true}
            type={"number"}
            max={19}
          />
        </div>
        <div className={styles.button}>
          <Button
            onClick={() => onClick()}
            disabled={!(number && number <= 19)}
            isLoader={loading}
            text={"Рассчитать"}
          />
        </div>
      </div>
      <div className={styles.letters}>
        {fibonacciArr ? (
          fibonacciArr.map((letter, index) => (
            <Circle
              index={index}
              extraClass={styles.circle}
              key={index}
              letter={`${letter}`}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </SolutionLayout>
  );
};
