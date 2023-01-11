import "./App.css";
import showdown from "showdown";
import { Markup } from "interweave";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";

const converter = new showdown.Converter();

export default function App() {
  const [text, setText] = useState("");

  // 0 = preview, 1 = text
  const [modeView, setModeView] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleMode = () => {
    setModeView(!modeView);
  };

  let mdHTML = converter.makeHtml(text);

  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ textAlign: "center", pb: 2 }}>
              MarkDown
            </Typography>
            <TextField
              label="MarkDown Text"
              multiline
              rows={20}
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ textAlign: "center", pb: 2 }}>
              HTML
            </Typography>
            <Box sx={{ overflowY: "scroll", height: "27rem", mb: 2 }}>
              {modeView == 0 ? <Markup content={mdHTML} /> : mdHTML}
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  disabled={modeView == 0 ? true : false}
                  primary
                  sx={{ width: "100%" }}
                  onClick={handleMode}
                >
                  Preview
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  disabled={modeView == 1 ? true : false}
                  primary
                  sx={{ width: "100%" }}
                  onClick={handleMode}
                >
                  Text
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
