import {Grid, Radio, RadioGroup, Textarea} from "@mantine/core";
import {ChangeEvent, useEffect, useState} from "react";
import {base64DecToArr, base64EncArr, strToUTF8Arr, UTF8ArrToStr} from "~/routes/base64-converter/converters";

export default function Base64converter() {
    const [selectedType, setSelectedType] = useState<"encode" | "decode">("encode");
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");

    useEffect(() => {
        if (selectedType === "encode") {
            const aMyUTF8Input = strToUTF8Arr(input);
            setResult(base64EncArr(aMyUTF8Input));
        } else if (selectedType === "decode") {
            const aMyUTF8Output = base64DecToArr(input, undefined);
            setResult(UTF8ArrToStr(aMyUTF8Output));
        }
    }, [input, selectedType])

    const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;
        setInput(value);
    }

    const onChangeType = (status: "encode" | "decode") => {
        setSelectedType(status);
    }

    return (
        <Grid sx={{height: "100%"}}>
            <Grid.Col span={5}>
                <Textarea
                    placeholder={"Enter text here"}
                    radius={"lg"}
                    value={input}
                    multiline
                    styles={{
                        root: {height: "100%"},
                        wrapper: {height: "100%"},
                        input: {height: "100%!important"}
                    }}
                    onChange={onChangeInput}
                />
            </Grid.Col>
            <Grid.Col span={2} sx={{display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
                <RadioGroup
                    variant="vertical"
                    label="Select case"
                    value={selectedType}
                    onChange={onChangeType}
                >
                    <Radio value="encode">Encode</Radio>
                    <Radio value="decode">Decode</Radio>
                </RadioGroup>
            </Grid.Col>
            <Grid.Col span={5}>
                <Textarea
                    placeholder={"You will see results here"}
                    radius={"lg"}
                    value={result}
                    minRows={7}
                    multiline
                    styles={{
                        root: {height: "100%"},
                        wrapper: {height: "100%"},
                        input: {height: "100%!important"}
                    }}
                />
            </Grid.Col>
        </Grid>
    )
}