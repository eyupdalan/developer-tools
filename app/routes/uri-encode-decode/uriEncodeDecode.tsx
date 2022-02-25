import { Divider, Grid, Title } from '@mantine/core';
import { ChangeEvent, useEffect, useState } from 'react';
import View from '~/routes/uri-encode-decode/view';

export default function UriEncodeDecode() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [selectedOperation, setSelectedOperation] = useState<'encode' | 'decode'>('encode');

  const [inputUriComponent, setInputUriComponent] = useState<string>('');
  const [resultUriComponent, setResultUriComponent] = useState<string>('');
  const [selectedOperationUriComponent, setSelectedOperationUriComponent] = useState<'encode' | 'decode'>('encode');

  useEffect(() => {
    if (selectedOperation === 'encode') {
      setResult(encodeURI(input));
    }

    if (selectedOperation === 'decode') {
      setResult(decodeURI(input));
    }
  }, [input, selectedOperation]);

  useEffect(() => {
    if (selectedOperationUriComponent === 'encode') {
      setResultUriComponent(encodeURIComponent(inputUriComponent));
    }

    if (selectedOperationUriComponent === 'decode') {
      setResultUriComponent(decodeURIComponent(inputUriComponent));
    }
  }, [inputUriComponent, selectedOperationUriComponent]);

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const onChangeOperation = (status: 'encode' | 'decode') => {
    setSelectedOperation(status);
  };

  const onChangeInputUriComponent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setInputUriComponent(value);
  };

  const onChangeOperationUriComponent = (status: 'encode' | 'decode') => {
    setSelectedOperationUriComponent(status);
  };

  return (
    <Grid>
      <Grid.Col span={12}>
        <Title order={2}>URI Encode/Decode</Title>
      </Grid.Col>
      <Grid.Col span={12}>
        <View
          title="Full URI"
          inputTitle="Enter URI here"
          input={input}
          result={result}
          selectedOperation={selectedOperation}
          onChangeInput={onChangeInput}
          onChangeOperation={onChangeOperation}
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider />
      </Grid.Col>
      <Grid.Col span={12}>
        <View
          title="URI Component"
          inputTitle="Enter URI component here"
          input={inputUriComponent}
          result={resultUriComponent}
          selectedOperation={selectedOperationUriComponent}
          onChangeInput={onChangeInputUriComponent}
          onChangeOperation={onChangeOperationUriComponent}
        />
      </Grid.Col>
    </Grid>
  );
}
