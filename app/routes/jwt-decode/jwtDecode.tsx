import {
  Grid, Textarea, Title, JsonInput, Alert,
} from '@mantine/core';
import {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function JwtDecode() {
  const ref = useRef(null);

  const [input, setInput] = useState<string>('');
  const [header, setHeader] = useState<JwtPayload>({});
  const [payload, setPayload] = useState<JwtPayload>({});

  const [error, setError] = useState('');

  useEffect(() => {
    if (!input) {
      return;
    }

    try {
      const decodedHeader = jwtDecode<JwtPayload>(input, { header: true });
      const decoded = jwtDecode<JwtPayload>(input);
      setHeader(decodedHeader);
      setPayload(decoded);
      setError('');
      ref.current!.focus();
    } catch (ex:any) {
      setHeader({});
      setPayload({});
      setError(ex.toString());
    }
  }, [input]);

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  return (
    <Grid sx={{ height: '100%' }} align="flex-start" justify="flex-start">
      <Grid.Col span={12}>
        <Title order={2}>JWT Token Decoder</Title>
      </Grid.Col>
      <Grid.Col span={12} sx={{ height: '90%' }} gutter="sm">
        <Grid sx={{ height: '100%' }}>
          <Grid.Col md={6} sm={12}>
            <Textarea
              title="Encoded"
              placeholder="Paste a token here"
              value={input}
              multiline
              error={error}
              styles={{
                root: { height: '100%' },
                wrapper: { height: '100%' },
                input: { height: '100%!important' },
              }}
              onChange={onChangeInput}
            />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <div style={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between',
            }}
            >
              <div style={{ height: '30%' }}>
                <JsonInput
                  ref={ref}
                  title="Header (ALGORITHM & TOKEN TYPE)"
                  value={JSON.stringify(header, null, 2)}
                  formatOnBlur
                  styles={{
                    root: { height: '100%' },
                    wrapper: { height: '100%' },
                    input: { height: '100%!important' },
                  }}
                  readOnly
                />
              </div>
              <div style={{ height: '65%' }}>
                <JsonInput
                  title="Payload (DATA)"
                  value={JSON.stringify(payload, null, 2)}
                  formatOnBlur
                  styles={{
                    root: { height: '100%' },
                    wrapper: { height: '100%' },
                    input: { height: '100%!important' },
                  }}
                  readOnly
                />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert icon={<FontAwesomeIcon icon={faTriangleExclamation} />} title="Warning:" color="yellow">
          JWTs are credentials, which can grant access to resources.
          Be careful where you paste them! We do not record tokens,
          all validation and debugging is done on the client side.
        </Alert>
      </Grid.Col>
    </Grid>
  );
}
