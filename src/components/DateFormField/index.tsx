import { forwardRef, useState } from "react";
import * as S from "./styles";

type DateFormFieldProps = {
  name: string;
};

type Ref = HTMLInputElement;

export const DateFormField = forwardRef<Ref, DateFormFieldProps>(
  (props, ref) => {
    const [maxDateFormat] = useState(new Date().toISOString().split("T")[0]);
    return (
      <S.Container>
        <S.Input
          type="date"
          name={props.name}
          defaultValue={maxDateFormat}
          max={maxDateFormat}
          ref={ref}
        />
      </S.Container>
    );
  }
);
