"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@/components/ui/button";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// custom accordion
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

// custom accordionsummary / title acccordion
const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
}));

export default function FAQ() {
  const [expanded, setexpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setexpanded(isExpanded ? panel : false);
  };

  return (
    <section className=" bg-black  border-gray-700 border-b-4">
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h3"
          color="common.white"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Frequently Asked Question
        </Typography>

        <Stack spacing={1} marginBottom={6}>
          {/* custom accordion 1 */}
          <CustomAccordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                What is Netflix?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </Typography>
              <Typography>
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          {/* custom accordion 2 */}
          <CustomAccordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                What much does Netflix cost
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from IDR 186,000 to IDR 54,000 a month. No extra costs, no
                contracts.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          {/* custom accordion 3 */}
          <CustomAccordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "22px" }}
              >
                Where i can watch?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </Typography>
              <Typography>
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          {/* custom accordion 4 */}
          <CustomAccordion
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                How do i cancel?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          {/* custom accordion 5 */}
          <CustomAccordion
            square
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                What can i watch on Netflix?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>

          {/* custom accordion 6 */}
          <CustomAccordion
            square
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: "30px" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                Is Netflix good for kids?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 4 }}>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Stack>

        <Typography
          variant="h6"
          component="p"
          color="common.white"
          textAlign="center"
          sx={{ my: 3 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Grid container>
          <Grid item xs>
            <TextField
              variant="filled"
              label="Email address"
              fullWidth
              sx={{ bgcolor: "common.white" }}
            />
          </Grid>
          <Grid item xs="auto">
            <Button className=" h-[57px] rounded-none -mt-[1px] bg-red-600">
              Get started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
