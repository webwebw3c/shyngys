import{i as e,n as t,t as n}from"./useDictionary-B3PNNCUz.js";import{i as r,n as i,r as a}from"./i18n-CWMnFJu8.js";import{t as o}from"./GlassCard-B4Wh5pVK.js";var s=e=>`data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#06132b"/>
        <stop offset="1" stop-color="#0d2b55"/>
      </linearGradient>
      <linearGradient id="body" x1="0" x2="1">
        <stop offset="0" stop-color="#f8fafc"/>
        <stop offset="1" stop-color="#dfe7f1"/>
      </linearGradient>
    </defs>
    <rect width="960" height="560" fill="url(#bg)"/>
    <path d="M95 430h770" stroke="#D4AF37" stroke-width="10" stroke-linecap="round"/>
    <path d="M130 466h700" stroke="#8ca3bd" stroke-width="8" stroke-linecap="round"/>
    <path d="M170 466l-36 44M285 466l-36 44M400 466l-36 44M515 466l-36 44M630 466l-36 44M745 466l-36 44" stroke="#8ca3bd" stroke-width="7" stroke-linecap="round"/>
    <rect x="110" y="165" width="740" height="205" rx="26" fill="url(#body)"/>
    <rect x="110" y="292" width="740" height="60" fill="#0057b8"/>
    <rect x="110" y="274" width="740" height="14" fill="#D4AF37"/>
    <rect x="158" y="206" width="84" height="52" rx="10" fill="#12385f"/>
    <rect x="270" y="206" width="84" height="52" rx="10" fill="#12385f"/>
    <rect x="382" y="206" width="84" height="52" rx="10" fill="#12385f"/>
    <rect x="494" y="206" width="84" height="52" rx="10" fill="#12385f"/>
    <rect x="606" y="206" width="84" height="52" rx="10" fill="#12385f"/>
    <rect x="725" y="190" width="60" height="88" rx="8" fill="#0057b8"/>
    <circle cx="270" cy="386" r="31" fill="#111827"/>
    <circle cx="690" cy="386" r="31" fill="#111827"/>
    <circle cx="270" cy="386" r="13" fill="#334155"/>
    <circle cx="690" cy="386" r="13" fill="#334155"/>
    <text x="480" y="106" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700" text-anchor="middle">KTZ</text>
    <text x="480" y="488" fill="#ffffff" font-family="Arial, sans-serif" font-size="38" font-weight="700" text-anchor="middle">${e}</text>
  </svg>`)}`,c=[{id:`coupe`,name:{ru:`Купейный вагон`,kz:`Купе вагоны`,en:`Coupe Wagon`},description:{ru:`Комфортный пассажирский вагон с закрытыми четырехместными купе для дальних поездок.`,kz:`Ұзақ сапарға арналған, төрт орындық жабық купелері бар жайлы жолаушылар вагоны.`,en:`A comfortable passenger coach with closed four-berth compartments for long-distance travel.`},capacity:{ru:`обычно 36 мест`,kz:`әдетте 36 орын`,en:`usually 36 seats`},amenities:[{ru:`Закрытое купе`,kz:`Жабық купе`,en:`Closed compartment`},{ru:`Постельные принадлежности`,kz:`Төсек жабдықтары`,en:`Bedding`},{ru:`Розетки и освещение`,kz:`Розеткалар және жарық`,en:`Power sockets and lighting`}],image:s(`Coupe`)},{id:`platzkart`,name:{ru:`Плацкартный вагон`,kz:`Плацкарт вагоны`,en:`Platzkart Wagon`},description:{ru:`Доступный формат поездки с открытой планировкой, боковыми и основными спальными местами.`,kz:`Негізгі және бүйірлік жатын орындары бар қолжетімді ашық жоспарлы вагон.`,en:`An affordable open-plan coach with main and side sleeping berths.`},capacity:{ru:`обычно 54 места`,kz:`әдетте 54 орын`,en:`usually 54 seats`},amenities:[{ru:`Багажные полки`,kz:`Жүк сөрелері`,en:`Luggage shelves`},{ru:`Спальные места`,kz:`Жатын орындар`,en:`Sleeping berths`},{ru:`Проводник и базовый сервис`,kz:`Жолсерік және негізгі сервис`,en:`Attendant and basic service`}],image:s(`Platzkart`)}],l=t(),u=()=>{let t=n(),{language:s}=e();return(0,l.jsxs)(`div`,{className:`section-shell py-12`,children:[(0,l.jsx)(a,{title:t.wagons.title,subtitle:t.wagons.subtitle}),(0,l.jsx)(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-3`,children:c.map((e,n)=>(0,l.jsx)(r.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.05},children:(0,l.jsxs)(o,{className:`h-full overflow-hidden p-0`,children:[(0,l.jsx)(`img`,{src:e.image,alt:i(e.name,s),loading:`lazy`,className:`h-44 w-full object-cover`}),(0,l.jsxs)(`div`,{className:`p-5`,children:[(0,l.jsx)(`p`,{className:`font-heading text-lg text-white light:text-slate-900`,children:i(e.name,s)}),(0,l.jsx)(`p`,{className:`mt-2 text-sm text-slate-300 light:text-slate-700`,children:i(e.description,s)}),(0,l.jsxs)(`p`,{className:`mt-3 text-sm text-gold`,children:[t.wagons.capacity,`: `,i(e.capacity,s)]}),(0,l.jsxs)(`p`,{className:`mt-2 text-xs text-slate-300 light:text-slate-700`,children:[t.wagons.amenities,`: `,e.amenities.map(e=>i(e,s)).join(`, `)]})]})]})},e.id))})]})};export{u as default};