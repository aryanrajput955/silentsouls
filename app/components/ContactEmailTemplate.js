import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";
import * as React from "react";

export const ContactEmailTemplate = ({
  name,
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Message from {name} on SilentSouls</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>SilentSouls Contact</Heading>
          <Text style={subheading}>New Inquiry Received</Text>
        </Section>
        
        <Section style={content}>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={paragraph}>
            <strong>Subject:</strong> {subject}
          </Text>
          
          <Hr style={hr} />
          
          <Text style={messageLabel}>Message:</Text>
          <Text style={messageBox}>
            {message}
          </Text>
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            This message was sent through the SilentSouls contact form.
          </Text>
          <Text style={footerMission}>
            Nurturing every heartbeat. Haridwar, Uttarakhand.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f9fafb",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#065f46",
  padding: "40px 0",
  textAlign: "center",
  borderRadius: "12px 12px 0 0",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textTransform: "uppercase",
  letterSpacing: "2px",
};

const subheading = {
  color: "#a7f3d0",
  fontSize: "14px",
  margin: "8px 0 0",
};

const content = {
  padding: "40px 30px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#374151",
  margin: "12px 0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const messageLabel = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#6b7280",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const messageBox = {
  backgroundColor: "#f3f4f6",
  padding: "20px",
  borderRadius: "8px",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#1f2937",
  border: "1px solid #e5e7eb",
  whiteSpace: "pre-wrap",
};

const footer = {
  padding: "30px",
  textAlign: "center",
  backgroundColor: "#f9fafb",
  borderRadius: "0 0 12px 12px",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};

const footerMission = {
  fontSize: "12px",
  color: "#059669",
  fontWeight: "bold",
  margin: "4px 0 0",
};
