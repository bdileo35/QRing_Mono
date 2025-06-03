"use client";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeDisplay({ value }: { value: string }) {
  return (
    <div style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "0 1px 8px #0001", display: "inline-block" }}>
      <QRCodeCanvas value={value} size={180} />
    </div>
  );
} 