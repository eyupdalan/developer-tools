import {
  Grid, Radio, RadioGroup, Textarea, Title,
} from '@mantine/core';
import { ChangeEvent, useEffect, useState } from 'react';
import words from 'lodash/words';
import upperFirst from 'lodash/upperFirst';

const startCase = (string: string): string => (
  words(string).reduce((result: string, word: string, index: number) => (
    result + (index ? ' ' : '') + upperFirst(word)
  ), '')
);

export default function CaseConverter() {
  const [selectedCase, setSelectedCase] = useState<'normal' | 'uppercase' | 'lowercase' | 'startcase'>('normal');
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    switch (selectedCase) {
      case 'lowercase':
        setResult(input.toLocaleLowerCase());
        break;
      case 'uppercase':
        setResult(input.toLocaleUpperCase());
        break;
      case 'startcase':
        setResult(startCase(input));
        break;
      case 'normal':
      default:
        setResult(input);
        break;
    }
  }, [input, selectedCase]);

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const onChangeCase = (status: 'normal' | 'uppercase' | 'lowercase' | 'startcase') => {
    setSelectedCase(status);
  };

  return (
    <Grid sx={{ height: '100%' }} align="flex-start" justify="flex-start">
      <Grid.Col span={12}>
        <Title order={2}>Case Converter</Title>
      </Grid.Col>
      <Grid.Col span={12} sx={{ height: '90%' }} gutter="sm">
        <Grid sx={{ height: '100%' }}>
          <Grid.Col md={5} sm={12}>
            <Textarea
              placeholder="Enter text here"
              value={input}
              multiline
              styles={{
                root: { height: '100%' },
                wrapper: { height: '100%' },
                input: { height: '100%!important' },
              }}
              onChange={onChangeInput}
            />
          </Grid.Col>
          <Grid.Col md={2} sm={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <RadioGroup
              variant="vertical"
              value={selectedCase}
              onChange={onChangeCase}
            >
              <Radio value="normal">Normal</Radio>
              <Radio value="uppercase">Uppercase</Radio>
              <Radio value="lowercase">Lowercase</Radio>
              <Radio value="startcase">Start case</Radio>
            </RadioGroup>
          </Grid.Col>
          <Grid.Col md={5} sm={12}>
            <Textarea
              placeholder="You will see results here"
              value={result}
              minRows={7}
              multiline
              styles={{
                root: { height: '100%' },
                wrapper: { height: '100%' },
                input: { height: '100%!important' },
              }}
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
