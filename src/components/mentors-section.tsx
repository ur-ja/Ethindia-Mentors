import React from "react";
import ClippedImage from "./clipped-image";
import NameTag from "../../public/tag.svg";
import Image from "next/image";
import Mandala from "../../public/mandala.svg";
interface Record {
  id: string;
  createdTime: string;
  fields: RecordField;
}

interface RecordField {
  Telegram: string;
  Contact: string;
  TimeSlot: string;
  Name: string;
  Expertise: string;
  Headshot: string;
  AtVenue?: boolean;
}

export default async function MentorsSection() {
  const res = await fetch("http://localhost:3000/api/airtable");
  const data = await res.json();

  return (
    <div className="z-10 relative flex justify-center items-center">
      <div className="w-3/4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.records
          .filter((field: Record) => field.fields.AtVenue === true)
          .map((record: Record) => (
            <div key={record.id} className="space-y-5">
              <ClippedImage url={record.fields.Headshot} />
              <div className="relative flex flex-col justify-center items-center">
                <Image
                  src={NameTag}
                  alt="Name tag for mentors"
                  className="w-80 h-auto"
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-black text-center">
                  {record.fields.Name}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
