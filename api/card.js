export default function handler(req, res) {
  const { name = "Kavi" } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(`
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 554.5">
  <defs>
    <style>
      .cls-1 {
        letter-spacing: 0em;
      }

      .cls-2 {
        letter-spacing: 0em;
      }

      .cls-3 {
        letter-spacing: .03em;
      }

      .cls-4 {
        letter-spacing: 0em;
      }

      .cls-5 {
        letter-spacing: 0em;
      }

      .cls-6 {
        font-size: 21.44px;
      }

      .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11 {
        fill: #fff;
      }

      .cls-6, .cls-8, .cls-9, .cls-11 {
        font-family: AcuminConcept-Medium, 'Acumin Variable Concept';
        font-variation-settings: 'wght' 500, 'wdth' 100, 'slnt' 0;
        font-weight: 500;
      }

      .cls-12 {
        letter-spacing: 0em;
      }

      .cls-13 {
        letter-spacing: -.01em;
      }

      .cls-14 {
        letter-spacing: 0em;
      }

      .cls-15 {
        letter-spacing: 0em;
      }

      .cls-16 {
        letter-spacing: 0em;
      }

      .cls-17 {
        letter-spacing: 0em;
      }

      .cls-18 {
        letter-spacing: 0em;
      }

      .cls-19 {
        letter-spacing: 0em;
      }

      .cls-20 {
        letter-spacing: 0em;
      }

      .cls-21 {
        letter-spacing: 0em;
      }

      .cls-22 {
        letter-spacing: 0em;
      }

      .cls-23 {
        letter-spacing: 0em;
      }

      .cls-24 {
        letter-spacing: 0em;
      }

      .cls-25 {
        letter-spacing: -.08em;
      }

      .cls-26 {
        letter-spacing: 0em;
      }

      .cls-27 {
        letter-spacing: 0em;
      }

      .cls-28 {
        letter-spacing: 0em;
      }

      .cls-29 {
        letter-spacing: -.01em;
      }

      .cls-8 {
        font-size: 12px;
        text-decoration: underline;
      }

      .cls-30 {
        letter-spacing: .06em;
      }

      .cls-31 {
        letter-spacing: .01em;
      }

      .cls-32 {
        letter-spacing: 0em;
      }

      .cls-33 {
        letter-spacing: 0em;
      }

      .cls-9 {
        font-size: 17.93px;
      }

      .cls-34 {
        letter-spacing: 0em;
      }

      .cls-35 {
        letter-spacing: .01em;
      }

      .cls-36 {
        letter-spacing: 0em;
      }

      .cls-37 {
        letter-spacing: 0em;
      }

      .cls-38 {
        stroke-linecap: round;
      }

      .cls-38, .cls-39, .cls-40, .cls-41 {
        stroke: #fff;
        stroke-miterlimit: 10;
      }

      .cls-38, .cls-40 {
        fill: none;
      }

      .cls-42 {
        letter-spacing: 0em;
      }

      .cls-43 {
        letter-spacing: 0em;
      }

      .cls-44 {
        letter-spacing: -.01em;
      }

      .cls-45 {
        letter-spacing: 0em;
      }

      .cls-46 {
        letter-spacing: -.01em;
      }

      .cls-47 {
        letter-spacing: 0em;
      }

      .cls-48 {
        letter-spacing: 0em;
      }

      .cls-39 {
        fill: #424657;
      }

      .cls-49 {
        letter-spacing: 0em;
      }

      .cls-40 {
        stroke-width: .5px;
      }

      .cls-50 {
        letter-spacing: 0em;
      }

      .cls-51 {
        letter-spacing: 0em;
      }

      .cls-41 {
        fill: #0d1117;
      }

      .cls-52 {
        letter-spacing: 0em;
      }

      .cls-53 {
        letter-spacing: 0em;
      }

      .cls-54 {
        letter-spacing: 0em;
      }

      .cls-55 {
        letter-spacing: 0em;
      }

      .cls-56 {
        letter-spacing: 0em;
      }

      .cls-57 {
        letter-spacing: .01em;
      }

      .cls-58 {
        letter-spacing: 0em;
      }

      .cls-59 {
        letter-spacing: -.01em;
      }

      .cls-60 {
        letter-spacing: 0em;
      }

      .cls-61 {
        letter-spacing: 0em;
      }

      .cls-62 {
        letter-spacing: 0em;
      }

      .cls-63 {
        fill: #242734;
      }

      .cls-64 {
        letter-spacing: 0em;
      }

      .cls-65 {
        letter-spacing: 0em;
      }

      .cls-66 {
        letter-spacing: 0em;
      }

      .cls-67 {
        letter-spacing: 0em;
      }

      .cls-68 {
        letter-spacing: -.04em;
      }

      .cls-69 {
        letter-spacing: 0em;
      }

      .cls-70 {
        letter-spacing: 0em;
      }

      .cls-71 {
        letter-spacing: 0em;
      }

      .cls-72 {
        letter-spacing: 0em;
      }

      .cls-73 {
        letter-spacing: 0em;
      }

      .cls-74 {
        letter-spacing: 0em;
      }

      .cls-75 {
        letter-spacing: 0em;
      }

      .cls-76 {
        letter-spacing: 0em;
      }

      .cls-77 {
        letter-spacing: .01em;
      }

      .cls-78 {
        letter-spacing: 0em;
      }

      .cls-79 {
        letter-spacing: 0em;
      }

      .cls-80 {
        letter-spacing: 0em;
      }

      .cls-10 {
        font-family: AcuminConcept-Thin, 'Acumin Variable Concept';
        font-size: 12.63px;
        font-variation-settings: 'wght' 100, 'wdth' 100, 'slnt' 0;
        font-weight: 200;
      }

      .cls-81 {
        letter-spacing: 0em;
      }

      .cls-82 {
        letter-spacing: 0em;
      }

      .cls-11 {
        font-size: 31.68px;
      }

      .cls-83 {
        letter-spacing: 0em;
      }

      .cls-84 {
        letter-spacing: 0em;
      }
    </style>
  </defs>
  <rect class="cls-63" width="1024" height="554.5"/>
  <rect class="cls-41" x="125.28" y="287.92" width="197.32" height="197.32" rx="20.73" ry="20.73"/>
  <rect class="cls-39" x="419.94" y="287.92" width="197.32" height="197.32" rx="20.73" ry="20.73"/>
  <rect class="cls-39" x="707.54" y="287.92" width="197.32" height="197.32" rx="20.73" ry="20.73"/>
  <text class="cls-11" transform="translate(125.31 103.99)"><tspan class="cls-17" x="0" y="0">A</tspan><tspan class="cls-61" x="21.13" y="0">n</tspan><tspan x="39.03" y="0">y </tspan><tspan class="cls-68" x="62.44" y="0">T</tspan><tspan class="cls-72" x="79.13" y="0">y</tspan><tspan class="cls-12" x="94.84" y="0">p</tspan><tspan class="cls-64" x="113.25" y="0">e</tspan><tspan x="129.85" y="0"> </tspan><tspan class="cls-35" x="137.8" y="0">O</tspan><tspan class="cls-44" x="162.09" y="0">f</tspan><tspan class="cls-58" x="170.87" y="0"> </tspan><tspan class="cls-26" x="178.82" y="0">Q</tspan><tspan class="cls-17" x="202.7" y="0">u</tspan><tspan class="cls-24" x="220.57" y="0">e</tspan><tspan class="cls-3" x="237.36" y="0">r</tspan><tspan x="249.71" y="0">y</tspan><tspan x="0" y="38.01">&amp; </tspan><tspan class="cls-54" x="31.77" y="38.01">D</tspan><tspan class="cls-26" x="54.83" y="38.01">i</tspan><tspan class="cls-17" x="62.4" y="38.01">s</tspan><tspan class="cls-26" x="77.71" y="38.01">c</tspan><tspan class="cls-42" x="93.77" y="38.01">u</tspan><tspan class="cls-49" x="111.35" y="38.01">s</tspan><tspan x="126.81" y="38.01">sio</tspan><tspan class="cls-13" x="167.35" y="38.01">n</tspan><tspan class="cls-58" x="185.12" y="38.01">.</tspan></text>
  <text class="cls-10" transform="translate(125.28 173.29)"><tspan class="cls-47" x="0" y="0">S</tspan><tspan class="cls-84" x="7.09" y="0">e</tspan><tspan class="cls-75" x="13.54" y="0">d </tspan><tspan class="cls-18" x="23.43" y="0">u</tspan><tspan x="30.34" y="0">t p</tspan><tspan class="cls-20" x="43.42" y="0">e</tspan><tspan class="cls-1" x="49.9" y="0">r</tspan><tspan class="cls-5" x="53.77" y="0">s</tspan><tspan x="59.35" y="0">pi</tspan><tspan class="cls-31" x="68.67" y="0">c</tspan><tspan class="cls-43" x="74.98" y="0">i</tspan><tspan x="77.34" y="0">a</tspan><tspan class="cls-80" x="83.73" y="0">t</tspan><tspan x="86.96" y="0">is unde o</tspan><tspan class="cls-2" x="134.65" y="0">mn</tspan><tspan class="cls-75" x="152.37" y="0">is i</tspan><tspan class="cls-27" x="165.67" y="0">s</tspan><tspan class="cls-48" x="171.3" y="0">t</tspan><tspan class="cls-75" x="174.43" y="0">e </tspan><tspan class="cls-74" x="183.79" y="0">n</tspan><tspan x="190.58" y="0">a</tspan><tspan class="cls-29" x="196.97" y="0">t</tspan><tspan class="cls-45" x="200.04" y="0">u</tspan><tspan class="cls-4" x="206.81" y="0">s </tspan><tspan class="cls-20" x="215.31" y="0">e</tspan><tspan class="cls-84" x="221.79" y="0">r</tspan><tspan class="cls-45" x="225.61" y="0">r</tspan><tspan x="229.32" y="0">or </tspan><tspan class="cls-16" x="242.81" y="0">s</tspan><tspan class="cls-2" x="248.38" y="0">i</tspan><tspan x="250.83" y="0">t</tspan><tspan x="0" y="15.16">volu</tspan><tspan class="cls-60" x="21.86" y="15.16">p</tspan><tspan x="28.91" y="15.16">ta</tspan><tspan class="cls-45" x="38.5" y="15.16">t</tspan><tspan class="cls-20" x="41.63" y="15.16">e</tspan><tspan class="cls-75" x="48.11" y="15.16">m a</tspan><tspan class="cls-47" x="68.18" y="15.16">c</tspan><tspan x="74.41" y="15.16">c</tspan><tspan class="cls-48" x="80.52" y="15.16">u</tspan><tspan class="cls-18" x="87.29" y="15.16">s</tspan><tspan class="cls-2" x="92.9" y="15.16">a</tspan><tspan class="cls-50" x="99.34" y="15.16">n</tspan><tspan class="cls-80" x="106.2" y="15.16">t</tspan><tspan x="109.44" y="15.16">ium</tspan><tspan class="cls-74" x="129.38" y="15.16">.</tspan></text>
  <g>
    <path class="cls-7" d="m114.12,58.37v.62h-2.89v-.62h2.89Z"/>
    <path class="cls-7" d="m135.53,59.16c-.39,1.11-1.18,2-2.99,2-2.12,0-3.31-1.49-3.31-3.38s1.32-3.41,3.35-3.41c1.85,0,2.7.99,2.98,2.05h-.76c-.32-.77-.9-1.41-2.23-1.41-1.58,0-2.56,1.16-2.56,2.75s.99,2.77,2.57,2.77c1.31,0,1.83-.57,2.21-1.36h.74Z"/>
    <path class="cls-7" d="m141.3,58.72c0,1.24-.78,2.43-2.42,2.43-1.51,0-2.38-1.15-2.38-2.42,0-1.34.93-2.44,2.42-2.44s2.38,1.19,2.38,2.43Zm-4.09,0c0,.92.61,1.83,1.69,1.83s1.68-.84,1.68-1.82-.62-1.85-1.71-1.85-1.67.86-1.67,1.84Z"/>
    <path class="cls-7" d="m142.49,57.58c0-.39,0-.81,0-1.16h.67c.02.17.03.58.03.93.2-.48.69-1.06,1.71-1.06,1.07,0,1.78.66,1.78,1.94v2.79h-.69v-2.66c0-.82-.31-1.47-1.23-1.47-1.04,0-1.56.81-1.56,1.94v2.18h-.69v-3.44Z"/>
    <path class="cls-7" d="m147.48,56.42h.94v-1.52h.69v1.52h1.24v.57h-1.24v2.69c0,.57.15.82.67.82.14,0,.33,0,.47-.04v.53c-.2.07-.41.08-.65.08-.9,0-1.18-.41-1.18-1.32v-2.76h-.94v-.57Z"/>
    <path class="cls-7" d="m155.24,59.93c0,.4.03.99.04,1.1h-.66c-.04-.19-.05-.56-.05-.72-.24.5-.76.85-1.77.85-1.31,0-1.78-.8-1.78-1.47,0-1.17,1.07-1.49,2.38-1.49h1.17v-.27c0-.54-.23-1.06-1.3-1.06-.96,0-1.18.43-1.29.9h-.69c.06-.62.47-1.46,1.98-1.46s1.98.78,1.98,1.54v2.1Zm-.68-1.22c-.15,0-.46,0-1.15,0-1.15,0-1.71.25-1.71.94,0,.51.37.93,1.2.93,1.35,0,1.65-.82,1.65-1.63v-.24Z"/>
    <path class="cls-7" d="m161.03,59.62c-.24.82-.95,1.54-2.2,1.54-1.6,0-2.39-1.1-2.39-2.41s.89-2.45,2.4-2.45,2.07.93,2.18,1.57h-.69c-.18-.48-.58-.98-1.51-.98-1.03,0-1.67.77-1.67,1.85s.61,1.84,1.68,1.84c.81,0,1.26-.39,1.51-.95h.69Z"/>
    <path class="cls-7" d="m161.59,56.42h.94v-1.52h.69v1.52h1.24v.57h-1.24v2.69c0,.57.15.82.67.82.14,0,.33,0,.47-.04v.53c-.2.07-.41.08-.65.08-.9,0-1.18-.41-1.18-1.32v-2.76h-.94v-.57Z"/>
  </g>
  <text class="cls-8" transform="translate(125.28 222.28)"><tspan class="cls-57" x="0" y="0">k</tspan><tspan class="cls-46" x="6.32" y="0">a</tspan><tspan class="cls-65" x="12.58" y="0">v</tspan><tspan x="18.49" y="0">indu</tspan><tspan class="cls-57" x="41.94" y="0">k</tspan><tspan class="cls-37" x="48.26" y="0">a</tspan><tspan class="cls-51" x="54.61" y="0">us</tspan><tspan class="cls-56" x="66.96" y="0">h</tspan><tspan class="cls-76" x="73.75" y="0">a</tspan><tspan class="cls-73" x="80.16" y="0">l</tspan><tspan class="cls-59" x="83.17" y="0">y</tspan><tspan x="88.88" y="0">a</tspan><tspan class="cls-73" x="95.29" y="0">5</tspan><tspan class="cls-70" x="101.97" y="0">6</tspan><tspan class="cls-76" x="108.74" y="0">6@g</tspan><tspan class="cls-56" x="133.51" y="0">m</tspan><tspan x="143.65" y="0">ai</tspan><tspan class="cls-81" x="152.99" y="0">l</tspan><tspan class="cls-52" x="155.85" y="0">.</tspan><tspan class="cls-28" x="158.37" y="0">c</tspan><tspan class="cls-36" x="164.58" y="0">om</tspan></text>
  <g>
    <line class="cls-40" x1="311.14" y1="219.93" x2="325.85" y2="219.93"/>
    <polygon class="cls-7" points="325.12 222.42 329.43 219.93 325.12 217.44 325.12 222.42"/>
  </g>
  <text class="cls-6" transform="translate(197.47 396.79)"><tspan class="cls-53" x="0" y="0">U</tspan><tspan class="cls-33" x="15.33" y="0">X / </tspan><tspan class="cls-83" x="48.28" y="0">U</tspan><tspan class="cls-33" x="63.73" y="0">I</tspan><tspan x="0" y="25.73">D</tspan><tspan class="cls-14" x="15.52" y="25.73">E</tspan><tspan class="cls-67" x="28.56" y="25.73">S</tspan><tspan class="cls-33" x="41.57" y="25.73">I</tspan><tspan class="cls-83" x="47.63" y="25.73">G</tspan><tspan class="cls-71" x="63.43" y="25.73">N</tspan><tspan class="cls-34" x="79.53" y="25.73">E</tspan><tspan class="cls-22" x="92.4" y="25.73">R</tspan></text>
  <line class="cls-38" x1="199.42" y1="431.56" x2="288.45" y2="431.56"/>
  <text class="cls-6" transform="translate(489.64 397.12)"><tspan class="cls-77" x="0" y="0">C</tspan><tspan class="cls-82" x="15.07" y="0">Y</tspan><tspan x="27.63" y="0">B</tspan><tspan class="cls-34" x="41.61" y="0">E</tspan><tspan x="54.47" y="0">R</tspan><tspan class="cls-67" x="0" y="25.73">S</tspan><tspan class="cls-55" x="13.01" y="25.73">E</tspan><tspan class="cls-79" x="25.94" y="25.73">C</tspan><tspan class="cls-83" x="40.71" y="25.73">U</tspan><tspan class="cls-71" x="56.17" y="25.73">R</tspan><tspan class="cls-19" x="70.12" y="25.73">I</tspan><tspan class="cls-30" x="76.36" y="25.73">T</tspan><tspan x="89.7" y="25.73">Y</tspan></text>
  <line class="cls-38" x1="491.6" y1="431.9" x2="580.63" y2="431.9"/>
  <text class="cls-9" transform="translate(779.6 395.68) scale(.93 1)"><tspan class="cls-15" x="0" y="0">W</tspan><tspan class="cls-69" x="16.78" y="0">IN</tspan><tspan x="35.41" y="0">D</tspan><tspan class="cls-23" x="48.4" y="0">O</tspan><tspan class="cls-78" x="61.84" y="0">WS</tspan><tspan class="cls-32" x="0" y="21.52">A</tspan><tspan class="cls-62" x="11.87" y="21.52">PP</tspan><tspan class="cls-21" x="34.32" y="21.52">L</tspan><tspan x="44.36" y="21.52">I</tspan><tspan class="cls-66" x="49.44" y="21.52">C</tspan><tspan class="cls-25" x="61.74" y="21.52">A</tspan><tspan class="cls-78" x="72.17" y="21.52">TION</tspan></text>
  <line class="cls-38" x1="779.6" y1="431.9" x2="868.63" y2="431.9"/>
  <g>
    <path class="cls-7" d="m143.45,401.6c0-3.58.03-7.16,0-10.73-.06-5.05,3.65-9.24,8.29-10.01.49-.08.97-.16,1.47-.16,7.48,0,14.95-.02,22.43,0,4.57.01,8.82,3.69,9.55,8.2.11.69.17,1.38.17,2.08,0,7.27,0,14.54,0,21.82,0,4.61-3.7,8.91-8.23,9.63-.71.11-1.41.17-2.12.17-7.08,0-14.17-.04-21.25.01-4.84.04-9.02-3.22-10.08-7.98-.14-.62-.21-1.26-.21-1.9,0-3.71,0-7.42,0-11.13Zm20.92,18.2c3.55,0,7.1,0,10.65,0,.41,0,.81-.02,1.22-.07,3.58-.46,6.32-3.53,6.32-7.13,0-7.3,0-14.6,0-21.91,0-1.35-.34-2.62-1.07-3.76-1.43-2.23-3.5-3.42-6.15-3.44-7.19-.03-14.37-.01-21.56-.02-.6,0-1.19.05-1.77.17-3.14.63-5.72,3.39-5.74,6.91-.05,7.39-.01,14.78-.02,22.17,0,.41.05.81.14,1.21.82,3.63,3.62,5.86,7.34,5.86,3.55,0,7.1,0,10.65,0Z"/>
    <path class="cls-7" d="m165.1,399.31c-.05,1.04.09,2.27-.09,3.5-.4,2.73-2.43,5.45-5.65,5.78-2.12.22-3.86-.65-5.19-2.28-1.11-1.35-1.63-2.92-1.64-4.67,0-1.83,0-3.66,0-5.5,0-.85.58-1.49,1.36-1.5.82,0,1.43.62,1.43,1.48,0,1.85,0,3.69,0,5.54,0,.85.21,1.67.66,2.4.68,1.1,1.63,1.8,2.96,1.74,1.32-.06,2.23-.82,2.83-1.96.37-.7.54-1.46.54-2.26,0-1.82,0-3.63,0-5.45,0-.85.59-1.48,1.37-1.49.81,0,1.42.63,1.42,1.49,0,.99,0,1.98,0,3.16Z"/>
    <path class="cls-7" d="m176.27,396.05c.03.34-.13.62-.3.89-.9,1.44-1.79,2.89-2.7,4.32-.18.28-.2.47-.01.77.93,1.44,1.83,2.9,2.73,4.36.56.92.21,1.91-.76,2.2-.58.17-1.19-.07-1.56-.66-.68-1.07-1.34-2.14-2.01-3.21-.27-.44-.27-.44-.53-.02-.67,1.07-1.33,2.15-2.01,3.21-.47.73-1.28.94-1.95.51-.68-.43-.86-1.25-.41-1.98.93-1.51,1.87-3.01,2.82-4.5.14-.23.13-.37,0-.58-.94-1.48-1.87-2.98-2.8-4.47-.32-.51-.38-1.03-.05-1.56.28-.45.7-.69,1.24-.66.47.03.86.24,1.12.65.69,1.11,1.4,2.21,2.08,3.32.16.27.24.38.46.02.67-1.12,1.37-2.22,2.07-3.33.35-.56.96-.79,1.54-.62.64.19,1.04.7,1.05,1.34Z"/>
  </g>
  <g>
    <path class="cls-7" d="m460.26,425.11c-1.81-.49-3.61-.99-5.35-1.69-3.71-1.5-7.15-3.45-9.96-6.36-2.05-2.13-3.51-4.58-3.99-7.54-.09-.53-.14-1.07-.14-1.61,0-7.28,0-14.56,0-21.84,0-1.05.54-1.6,1.61-1.61,3.8-.02,7.56-.45,11.23-1.45,1.89-.51,3.7-1.21,5.31-2.35.46-.33.88-.71,1.27-1.13.6-.65,1.51-.69,2.05,0,1.25,1.59,2.97,2.44,4.8,3.1,2.42.86,4.94,1.3,7.49,1.57,1.61.17,3.22.27,4.84.28.88,0,1.45.57,1.51,1.45.01.16,0,.33,0,.49,0,6.91-.02,13.81,0,20.72.01,3.64-1.28,6.75-3.7,9.42-2.52,2.78-5.65,4.69-9.03,6.23-2.21,1.01-4.51,1.78-6.88,2.32h-1.08Zm17.87-27.13c0-3.39,0-6.77,0-10.16,0-.39-.09-.54-.52-.56-2.33-.1-4.66-.3-6.95-.77-3.33-.68-6.53-1.68-9.22-3.88-.19-.15-.33-.12-.51.01-1.71,1.25-3.61,2.12-5.61,2.79-3.64,1.23-7.4,1.68-11.21,1.85-.39.02-.55.1-.55.53.01,6.56,0,13.12.02,19.68,0,1.77.44,3.43,1.32,4.98,1.09,1.9,2.6,3.4,4.35,4.66,3.37,2.44,7.16,3.97,11.13,5.09.4.11.76.06,1.14-.05,2.33-.66,4.59-1.48,6.76-2.54,2.56-1.26,4.94-2.77,6.88-4.9,1.92-2.11,3-4.54,2.97-7.44-.03-3.1,0-6.2,0-9.3Z"/>
    <path class="cls-7" d="m460.87,414.35c-2.62,0-5.24,0-7.86,0-1.08,0-1.65-.55-1.65-1.63,0-3.46,0-6.92,0-10.38,0-1.08.57-1.62,1.65-1.62,1.04,0,1.03,0,1.05-1.05.02-1.2-.05-2.39.05-3.59.29-3.31,2.92-5.89,6.21-6.16,3.6-.29,6.55,2.23,7.19,5.39.09.44.16.88.14,1.34-.04.76-.59,1.35-1.31,1.41-.69.06-1.32-.45-1.46-1.2-.05-.28-.04-.57-.08-.85-.32-1.88-1.94-3.44-4.12-3.31-2.19.13-3.78,1.81-3.8,3.91-.01,1.18.01,2.37-.01,3.55,0,.43.12.56.56.56,3.73-.02,7.46,0,11.19,0,1.24,0,1.75.51,1.75,1.74,0,3.38,0,6.77,0,10.15,0,1.23-.51,1.73-1.75,1.73-2.58,0-5.15,0-7.73,0Zm-.02-2.82c2.05,0,4.1,0,6.15,0,.41,0,.54-.13.54-.54-.02-2.3-.02-4.61,0-6.91,0-.41-.13-.54-.54-.54-4.1.01-8.2.01-12.3,0-.41,0-.54.13-.53.54.02,2.29.02,4.58,0,6.87,0,.45.12.59.58.59,2.04-.02,4.07,0,6.11,0Z"/>
    <path class="cls-7" d="m460.84,408.94c-.74,0-1.41-.7-1.38-1.43.02-.74.67-1.38,1.4-1.38.75,0,1.41.66,1.4,1.41,0,.75-.67,1.41-1.41,1.4Z"/>
  </g>
  <g>
    <path class="cls-7" d="m758.54,425.11c-1.77,0-3.54,0-5.31,0-2.69,0-4.77-2.07-4.78-4.76-.01-3.55-.01-7.11,0-10.66,0-2.7,2.07-4.77,4.77-4.78,3.55-.02,7.11-.02,10.66,0,2.73.01,4.77,2.08,4.77,4.82,0,3.52,0,7.04,0,10.56,0,2.77-2.05,4.82-4.81,4.82-1.77,0-3.54,0-5.31,0Zm6.9-10.06c0-1.77,0-3.53,0-5.3,0-1.11-.52-1.62-1.62-1.62-3.5,0-7,0-10.51,0-1.1,0-1.64.53-1.64,1.61,0,3.52,0,7.04,0,10.55,0,1.07.52,1.59,1.6,1.6,3.52,0,7.04,0,10.55,0,1.1,0,1.61-.52,1.61-1.64,0-1.73,0-3.47,0-5.2Z"/>
    <path class="cls-7" d="m735.38,381.73c1.77,0,3.54,0,5.3,0,2.71,0,4.78,2.02,4.8,4.73.03,3.55.03,7.11,0,10.66-.02,2.72-2.04,4.78-4.76,4.8-3.57.04-7.14.03-10.71,0-2.72-.02-4.73-2.09-4.73-4.81,0-3.54,0-7.07,0-10.61,0-2.75,2.03-4.77,4.78-4.78,1.77,0,3.54,0,5.3,0Zm0,3.21c-1.73,0-3.47,0-5.2,0-1.19,0-1.67.48-1.67,1.66,0,3.47,0,6.94,0,10.41,0,1.2.51,1.7,1.7,1.7,3.45,0,6.91,0,10.36,0,1.17,0,1.72-.54,1.72-1.7,0-3.45,0-6.91,0-10.36,0-1.2-.5-1.7-1.69-1.71-1.73,0-3.47,0-5.2,0Z"/>
    <path class="cls-7" d="m725.29,414.98c0-1.8,0-3.6,0-5.4.01-2.54,2.02-4.64,4.56-4.67,3.68-.04,7.36-.04,11.04,0,2.52.03,4.56,2.1,4.58,4.67.04,3.62.04,7.23,0,10.85-.03,2.66-2.12,4.67-4.77,4.67-3.55,0-7.11,0-10.66,0-2.7,0-4.75-2.06-4.76-4.77,0-1.78,0-3.57,0-5.35Zm10.1-6.86c-1.77,0-3.54,0-5.3,0-1.04,0-1.58.52-1.58,1.57,0,3.54,0,7.07,0,10.61,0,1.06.52,1.58,1.57,1.58,3.54,0,7.07,0,10.61,0,1.07,0,1.6-.54,1.6-1.61,0-3.5,0-7.01,0-10.51,0-1.09-.55-1.64-1.63-1.64-1.75,0-3.5,0-5.26,0Z"/>
    <path class="cls-7" d="m758.62,381.73c1.8,0,3.6,0,5.4,0,2.52.01,4.62,2.07,4.63,4.6.02,3.6.01,7.2,0,10.8,0,2.66-1.99,4.75-4.66,4.79-3.63.05-7.27.05-10.9,0-2.65-.04-4.64-2.15-4.65-4.81,0-3.52,0-7.04,0-10.56,0-2.77,2.05-4.81,4.81-4.82,1.78,0,3.57,0,5.35,0Zm6.82,10.08c0-1.72,0-3.44,0-5.16,0-1.22-.48-1.71-1.68-1.71-3.47,0-6.94,0-10.42,0-1.17,0-1.67.51-1.67,1.68,0,3.47,0,6.94,0,10.42,0,1.14.53,1.67,1.69,1.67,3.47,0,6.94,0,10.42,0,1.13,0,1.66-.52,1.66-1.64,0-1.75,0-3.5,0-5.26Z"/>
  </g>
</svg>
  `);
}
