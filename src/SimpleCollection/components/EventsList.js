import React from "react";
import Section from "./Section";
import { Profile } from "@uniwebcms/module-sdk";
import { Card } from "./Card";

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function EventList({ block }) {
  const events = block.content.content[0].content.map((event) => {
    return {
      href: event.attrs.href,
      title: event.attrs.title,
      description: event.attrs.caption,
      event: event.attrs.location + " " + event.attrs.date,
      cta: event.attrs.linkLabel,
    };
  });
  return (
    <Section title={Profile.stripTags(block.title)}>
      <div className="space-y-16">
        {events.map((event) => (
          <Appearance {...event} />
        ))}
      </div>
    </Section>
  );
}
