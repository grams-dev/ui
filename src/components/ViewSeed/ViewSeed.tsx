import React, {
  useState
} from "react";

import { ViewSeedProps } from "./ViewSeed.types";

import {
  Button,
  Checkbox,
  Form,
  Grid,
  Segment
} from "semantic-ui-react";
import { useInverted } from "../../hooks";

const MnemomicPhrase = ({ mnemonic, rows, columns, size }) => {

  const words = mnemonic.split(" ");

  return (
    <Grid
      className="full"
      padded
      columns={columns}
    >
      {[...Array(rows)].map((x, i) =>
        <Grid.Row key={i}>
          {[...Array(columns)].map((x, j) =>
            <Grid.Column key={j}>
              <p className={`${size} text`}>{words[j + (columns * i)]}</p>
            </Grid.Column>
          )}
        </Grid.Row>
      )}
    </Grid>
  );
}

const ViewSeed: React.FC<ViewSeedProps> = ({
  basic = false,
  columns = 4,
  rows = 6,
  seed,
  size = "large",
  onConfirm,
  onCopy
}) => {

  const inverted = useInverted();

  const [ack, setAck] = useState(false);
  const onAckChange = (event, data) => { setAck(data.checked) };

  return (
    <Segment
      data-testid="ViewSeed"
      basic={basic}
      inverted={inverted}
    >
      <MnemomicPhrase mnemonic={seed} rows={rows} columns={columns} size={size} />
      <Form size={size}>
        <Form.Checkbox
          required
          label='I acknowledge that I have saved the above seed securely and will not be able to retrieve it in the future'
          onChange={onAckChange}
        />
        <Button.Group
          fluid>
          <Button
            disabled={!ack}
            onClick={onConfirm}
            primary
          >
            Confirm
          </Button>
          <Button.Or />
          <Button
            onClick={() => onCopy(seed)}
            color="facebook"
          >
            Copy
          </Button>
        </Button.Group>
      </Form>
    </Segment>
  );
}

export default ViewSeed;
