/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Button, Box, Fab } from "@mui/material";

const JobCard = ({ job }) => {
  const { title, company, location, description, experience, applyLink } = job;

  return (
    <Card style={{ borderRadius: "20px", border: "1px solid lightgrey" }}>
      <CardContent>
        <Box style={{ display: "flex", gap: "10px" }}>
          <img style={{ width: "55px" }} src="/company.png" alt="companyLogo" />
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="semibold"
              letterSpacing={2}
              color="grey"
            >
              {company}
            </Typography>
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
        </Box>
        <Typography marginLeft="66px" variant="body2">
          {location}
        </Typography>
        <Typography
          marginY="8px"
          fontWeight="500"
          fontSize="14px"
          color="#37546D"
        >
          Estimated Salary: $18 - 35 LPA ✅
        </Typography>
        <Typography fontSize="1rem" fontWeight="semibold" lineHeight="1.5">
          About Company:
        </Typography>
        <Typography fontSize="1rem" fontWeight="bold">
          About us
        </Typography>
        <div style={{ position: "relative", height: "100%" }}>
          <Typography
            variant="body1"
            fontSize="1rem"
            lineHeight="1.2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "200px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            eaque corrupti ipsa dolorum repellat quasi cumque eos temporibus,
            ratione recusandae autem cupiditate reiciendis doloribus ipsum,
            facere dolore soluta. Nemo, quaerat? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti ut temporibus animi! Eius
            consequuntur eveniet culpa aspernatur laboriosam architecto quam
            maxime voluptas, enim laborum amet minus facilis laudantium earum
            molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo iste id quaerat amet, ullam iusto mollitia velit ut eaque.
            Incidunt et eius animi consequatur. Neque, a. Nulla fuga blanditiis
            odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores nemo incidunt dicta molestias! Alias consequatur tenetur
            ex labore dolore excepturi dicta beatae qui a recusandae commodi, ad
            distinctio sequi praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto neque repellat pariatur officia, veniam
            ullam repellendus, autem quod modi sed porro hic eos optio nulla
            soluta, ipsa quis! Sit, dolores.
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "50%",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))",
            }}
          ></div>
        </div>
        <div
          style={{
            marginTop: "-20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Fab
            style={{
              whiteSpace: "nowrap",
              color: "blue",
              textTransform: "none",
              letterSpacing: "1.5px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            View job
          </Fab>
        </div>
        <Box>
          <Typography
            variant="body2"
            fontWeight="semibold"
            letterSpacing={2}
            color="grey"
            marginTop="1rem"
          >
            Minimum Experience
          </Typography>
          <Typography variant="subtitle1">3 years</Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            width: "100%",
            padding: "8px 18px",
            background: "rgb(85,239,196)",
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: "0.5rem",
          }}
          href={applyLink}
          target="_blank"
        >
          ⚡Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
