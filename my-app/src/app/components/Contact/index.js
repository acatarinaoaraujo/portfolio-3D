import styled from "styled-components";
import { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

const SubSectionText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 10px;
  margin-bottom: 40px;
`;

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const index = () => {
  console.log("GMAIL_USER:", process.env.NEXT_PUBLIC_GMAIL_USER);

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(response);
      if (response.ok) setStatus("Message sent!");
      else setStatus("Error sending message.");
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <Section id="contact">
      <Title>Contact Me</Title>

      <SectionText>Let's Build Something Amazing Together!</SectionText>
      <SubSectionText>
        💡 🌈 🚂 💬 🐧
        <br />
        Got a project, a job opportunity, or just want to geek out? Let's
        connect! <br />
        Check out my links or drop me a message below—I'd love to hear from you!
      </SubSectionText>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 500, mx: "auto" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <TextField
          name="title"
          label="Title"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          fullWidth
        >
          Send
        </Button>
        {status && <Box mt={2}>{status}</Box>}
      </Box>
      <ContactInfoUpperContainer>
        <ContactInfoContainer>
          <Icon
            src="https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png"
            alt="Email icon"
          />
          <p>
            <ContactLink href="mailto:ancoaraujo@gmail.com">
              ancoaraujo@gmail.com
            </ContactLink>
          </p>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="LinkedIn icon"
          />
          <p>
            <ContactLink href="https://www.linkedin.com/in/acatarinaoaraujo/">
              LinkedIn
            </ContactLink>
          </p>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub icon"
          />
          <p>
            <ContactLink href="https://github.com/acatarinaoaraujo">GitHub</ContactLink>
          </p>
        </ContactInfoContainer>
      </ContactInfoUpperContainer>
    </Section>
  );
};

export default index;
