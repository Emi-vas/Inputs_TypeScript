import React, { useState } from "react";
import { COLORS } from "./constants";
import { Caret, ClearBtn, Container, Divider, List, Value } from "./Select.style";

interface Option {
    label: string,
    value: number
}

interface Props {
    options: Option[],
    value: Option[],
    setValue: (value: any) => void
}

const Select = ({ options, value, setValue }: Props) => {

    const [displayList, setDisplayList] = useState(false)

    const isValueInList = (option: Option): boolean => {
       for(let i in value) {
            if(value[i].label == option.label) {
                return true
            }
       }
        return false
    }

    const removeFromList = (option: Option) => {
        let tempTab = value.filter((item) => item.label != option.label)
        setValue(tempTab)
    }

    return (
        <Container 
            tabIndex={0} 
            onBlur={() => setDisplayList(false)}
            onClick={() => setDisplayList(!displayList)}
        >
            <Value>
                {
                     value[0] && value.map((item, index) => (
                        <div key={index}>
                            {item.label}
                        </div>
                     ))
                }
            </Value>

            <ClearBtn 
                onClick={(e) => {
                    e.stopPropagation()
                    setValue([])
                }}
            
            >&times;</ClearBtn>
            <Divider></Divider>
            <Caret ></Caret>

            <List
                style={{
                    display : displayList ? "block" : "none"
                }}
            >
                {
                    options.map((option: Option) => (
                        <li 
                            key={option.label}
                            onClick={(e) => {
                                e.stopPropagation()

                                if(!isValueInList(option)) {
                                    setValue([...value, option])
                                } else {
                                    removeFromList(option)
                                }
                            }}

                            style={{
                                color: isValueInList(option) ? COLORS.blue : ""
                            }}
                        > {option.label} </li>
                    ))
                }
            </List>
        </Container>
    );
};

export default Select;