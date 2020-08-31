import React from "react";
import { Svg } from "./styles";

export const Logo = props => {
  return (
    <Svg
      width={285.476}
      height={129.48}
      viewBox="107.262 10.26 285.476 129.48"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-stripes-gradient"
          x1={0.172}
          x2={0.828}
          y1={0.123}
          y2={0.877}
        >
          <stop offset={0} stopColor="#f92" />
          <stop offset={1} stopColor="#e00" />
        </linearGradient>
        <filter
          id="prefix__editing-stripes"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood result="color" floodColor="red" />
          <feImage
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+PHBhdGggZD0iTSAtMSAtMSBMIDIgMiBNIC0yIC0xIEwgMSAyIE0gLTEgLTIgTCAyIDEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+"
            width={2000}
            height={1000}
            result="image"
          />
          <feTile in="image" result="tile" />
          <feComposite operator="in" in="SourceGraphic" in2="image" />
        </filter>
      </defs>
      <g filter="url(#prefix__editing-stripes)">
        <path
          d="M2.94-34.37h6.47v4.93q1.21-1.28 2.85-2.08 1.63-.8 3.8-.8 2.24 0 4.16.96t3.36 2.91q1.44 1.95 2.28 4.93.83 2.98.83 7.07 0 8-3.01 12.42-3.01 4.41-8 4.41-2.11 0-3.62-.8-1.5-.8-2.65-2.27V14.4L2.94 16v-50.37zm10.88 6.21q-1.4 0-2.52.8t-1.89 2.27v19.2q.89 1.15 2.01 1.67 1.12.51 2.21.51 1.6 0 2.82-1.03 1.21-1.02 2.08-2.78.86-1.76 1.31-4.13.45-2.37.45-5.05 0-3.33-.61-5.54t-1.57-3.52q-.96-1.31-2.11-1.86-1.15-.54-2.18-.54zM50.05-24q0 4.48-3.68 7.49T36.16-12.8q.26 2.56.93 4.16t1.63 2.53q.96.93 2.21 1.28t2.59.35q3.07 0 5.76-1.6t4.35-5.38h2.05q-.83 2.37-2.3 4.52-1.48 2.14-3.46 3.77T45.63-.58q-2.3.96-4.73.96-2.24 0-4.32-.76-2.08-.77-3.68-2.53-1.6-1.76-2.6-4.58-.99-2.81-.99-6.91 0-2.69.61-5.82.61-3.14 2.05-5.83t3.77-4.48q2.34-1.79 5.8-1.79 1.6 0 3.1.35t2.72 1.28q1.22.93 1.95 2.53.74 1.6.74 4.16zM36.1-15.3q4.54-.7 7.2-3.2 2.65-2.49 2.65-6.14 0-2.43-.83-3.49-.83-1.05-2.37-1.05-1.66 0-2.91 1.28-1.25 1.28-2.08 3.29-.83 2.02-1.25 4.48-.41 2.47-.41 4.83zm17.53-25.53l6.4-.9V-32h4.93v2.24h-4.93v19.52q0 .77.07 1.76.06.99.35 1.89.29.89.89 1.5.61.61 1.7.61 1.73 0 3.3-1.73 1.56-1.73 2.46-5.25h2.37q-1.09 4.04-2.34 6.37-1.25 2.34-2.59 3.55Q64.9-.32 63.58.03q-1.31.35-2.4.35-2.3 0-3.77-.86-1.47-.86-2.31-2.21-.83-1.34-1.15-2.97-.32-1.64-.32-3.24v-20.86h-2.17V-32h2.17v-8.83zM85.89-32h6.4v30.66q1.6-.52 2.85-1.16 1.24-.64 2.17-1.72.93-1.09 1.54-2.82.61-1.73.93-4.42h2.36q-.51 3.4-1.31 5.54t-1.98 3.46q-1.19 1.31-2.82 2.04Q94.4.32 92.29.96v4.1q0 3-.64 5.08t-1.76 3.4q-1.12 1.31-2.56 1.88-1.44.58-3.04.58-3.2 0-4.99-1.82-1.8-1.83-1.8-4.45 0-1.67.74-3.01.74-1.34 1.92-2.46 1.18-1.12 2.69-1.99 1.5-.86 3.04-1.5v-5.51q-1.22 1.67-3.04 2.76Q81.02-.9 78.72-.9q-1.92 0-3.87-.73-1.95-.74-3.52-2.4-1.57-1.67-2.56-4.35-.99-2.69-.99-6.53 0-2.88.67-5.95.67-3.08 2.14-5.6 1.47-2.53 3.78-4.2 2.3-1.66 5.57-1.66.76 0 1.63.16.86.16 1.66.54.8.39 1.51 1.06.7.67 1.15 1.63V-32zM80.32-5.76q.96 0 1.95-.51t1.79-1.41q.8-.9 1.32-2.11.51-1.22.51-2.63v-13.63q-.45-1.02-1.38-1.89-.93-.86-2.4-.86-2.05 0-3.52 1.31-1.47 1.31-2.37 3.3-.89 1.98-1.31 4.35-.41 2.37-.41 4.48 0 5.18 1.5 7.39t4.32 2.21zm2.75 18.43q1.73 0 2.27-1.31.55-1.31.55-3.55V3.33q-3.2 1.47-4.55 2.91Q80 7.68 80 9.47q0 1.47.8 2.34.8.86 2.27.86zM99.71-32h6.4v5.38q.77-1.16 1.51-2.18.73-1.02 1.63-1.79.89-.77 1.98-1.25 1.09-.48 2.43-.48 2.18 0 3.2 1.12 1.03 1.12 1.03 2.72 0 .96-.32 1.6-.32.64-.77 1.02-.45.39-.96.55-.51.16-.9.16-.57 0-.92-.26-.36-.25-.71-.54-.35-.29-.8-.55-.45-.25-1.15-.25-1.47 0-2.82 1.02-1.34 1.03-2.43 2.18V0h-6.4v-32zm38.72 0h6.4v21.76q0 .64.07 1.6.06.96.35 1.89.29.93.86 1.6.58.67 1.6.67 3.14 0 4.61-6.98h2.37q-.71 4.04-1.79 6.37-1.09 2.34-2.31 3.55-1.21 1.22-2.49 1.57-1.28.35-2.31.35-1.47 0-2.53-.51-1.05-.51-1.79-1.34-.73-.83-1.18-1.92-.45-1.09-.71-2.31-.96 2.5-3.1 4.29T131.26.38q-1.92 0-3.87-.76-1.95-.77-3.52-2.53-1.57-1.76-2.56-4.55-.99-2.78-.99-6.81 0-2.95.67-6.15t2.15-5.82q1.47-2.62 3.77-4.35 2.31-1.73 5.57-1.73.77 0 1.63.16.87.16 1.67.54.8.39 1.5 1.06t1.15 1.63V-32zm-5.57 27.52q.96 0 1.96-.54.99-.55 1.79-1.48.8-.92 1.31-2.2.51-1.28.51-2.76v-14.59q-.45-1.02-1.37-1.89-.93-.86-2.4-.86-2.05 0-3.52 1.38-1.48 1.37-2.37 3.45-.9 2.08-1.31 4.55-.42 2.46-.42 4.7 0 5.5 1.5 7.87 1.51 2.37 4.32 2.37zM152.26-32h6.4v4.42q1.66-3.08 3.52-3.91 1.85-.83 3.52-.83 1.66 0 2.91.45 1.25.45 2.14 1.21.9.77 1.51 1.8.6 1.02.99 2.24.89-1.92 1.85-3.04.96-1.12 1.92-1.73.96-.61 1.89-.77.93-.16 1.7-.16 2.88 0 4.64 1.09 1.76 1.09 2.65 2.78.9 1.7 1.19 3.71.29 2.02.29 3.88 0 1.15-.07 2.52-.06 1.38-.13 2.82l-.12 2.88q-.07 1.44-.07 2.66 0 .51.07 1.44.06.92.32 1.82.25.9.83 1.57.57.67 1.66.67 1.47 0 2.66-1.66 1.18-1.67 1.95-5.32h2.37q-.71 4.04-1.79 6.37-1.09 2.34-2.31 3.55-1.21 1.22-2.43 1.57-1.22.35-2.24.35-2.05 0-3.46-.8-1.4-.8-2.3-2.14-.9-1.34-1.31-3.14-.42-1.79-.42-3.71 0-.57.03-2.14.04-1.57.07-3.36.03-1.79.06-3.39t.03-2.24q0-2.05-.32-3.4-.32-1.34-.89-2.11-.58-.77-1.31-1.09-.74-.32-1.57-.32-1.99 0-3.23 1.6-1.25 1.6-1.76 5.38V0h-6.4v-21.38q0-1.15-.1-2.24-.1-1.08-.48-1.95-.38-.86-1.09-1.37-.7-.52-1.92-.52-2.05 0-3.1 1.7-1.06 1.7-1.95 5.28V0h-6.4v-32z"
          fill="url(#prefix__editing-stripes-gradient)"
          transform="translate(149.457 103.865)"
        />
      </g>
      <style />
    </Svg>
  )
}