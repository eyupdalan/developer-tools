import {
  Grid, Radio, RadioGroup, Textarea, Title,
} from '@mantine/core';
import { UriEncodeDecodeViewProps } from '~/routes/uri-encode-decode/uriEncodeDecode.types';

export default function View({
  title, input, inputTitle, result, selectedOperation, onChangeInput, onChangeOperation,
}: UriEncodeDecodeViewProps) {
  return (
    <>
      <Grid.Col span={12}>
        <Title order={5}>{title}</Title>
      </Grid.Col>
      <Grid.Col span={12} gutter="sm">
        <Textarea
          placeholder={inputTitle}
          value={input}
          multiline
          onChange={onChangeInput}
        />
      </Grid.Col>
      <Grid.Col span={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <RadioGroup
          variant="horizontal"
          value={selectedOperation}
          onChange={onChangeOperation}
        >
          <Radio value="encode">Encode</Radio>
          <Radio value="decode">Decode</Radio>
        </RadioGroup>
      </Grid.Col>
      <Grid.Col span={12} gutter="sm">
        <Textarea
          placeholder="You will see results here"
          value={result}
          multiline
          readOnly
        />
      </Grid.Col>
    </>
  );
}
