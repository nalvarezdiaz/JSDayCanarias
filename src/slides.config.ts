// @ts-ignore
import Me from "./slides/Welcome/Me.mdx";
// @ts-ignore
import About from "./slides/Welcome/About.mdx";
// @ts-ignore
import WhatIs from "./slides/Intro/WhatIs.mdx";
// @ts-ignore
import WhyUseIt from "./slides/Intro/WhyUseIt.mdx";
// @ts-ignore
import WhyUseIt2 from "./slides/Intro/WhyUseIt2.mdx";
// @ts-ignore
import CompoundComponents from "./slides/Intro/CompoundComponents.mdx";
// @ts-ignore
import ManyProps from "./slides/Intro/ManyProps.mdx";
// @ts-ignore
import Expectations from "./slides/Intro/Expectations.mdx";
// @ts-ignore
import MaterialUI from "./slides/Libraries/MaterialUI.mdx";
// @ts-ignore
import ReachUI from "./slides/Libraries/ReachUI.mdx";
// @ts-ignore
import StandardPath from "./slides/CounterUseCase/StandardPath.mdx";
// @ts-ignore
import Limitations from "./slides/CounterUseCase/Limitations.mdx";
// @ts-ignore
import CreatingContext from "./slides/CounterUseCase/CreatingContext.mdx";
// @ts-ignore
import Composing from "./slides/CounterUseCase/Composing.mdx";
// @ts-ignore
import CreatingContextSelect from "./slides/SelectUseCase/CreatingContext.mdx";
// @ts-ignore
import NotTooEasy from "./slides/SelectUseCase/NotTooEasy.mdx";
// @ts-ignore
import MoreSlider from "./slides/MoreUseCases/Slider.mdx";
// @ts-ignore
import MoreTableOld from "./slides/MoreUseCases/TableOld.mdx";
// @ts-ignore
import MoreTableCC from "./slides/MoreUseCases/TableCC.mdx";
// @ts-ignore
import CloseThanks from "./slides/Close/Thanks.mdx";

export default [
  {
    id: "welcome",
    title: "Welcome",
    items: [
      {
        title: "Me",
        path: "/me",
        component: Me,
      },
      {
        title: "About the talk",
        path: "/about",
        component: About,
      },
    ],
  },
  {
    id: "introduction",
    title: "Introduction",
    items: [
      {
        title: "What it is?",
        path: "/intro/what-it-is",
        component: WhatIs,
      },
      {
        title: "Why use it? (I)",
        path: "/intro/why-use-it",
        component: WhyUseIt,
      },
      {
        title: "Why use it? (II)",
        path: "/intro/why-use-it-2",
        component: WhyUseIt2,
      },
      {
        title: "HTML vs React",
        path: "/intro/compound-components",
        component: CompoundComponents,
      },
      {
        title: "Many Props",
        path: "/intro/many-props",
        component: ManyProps,
      },
      {
        title: "Expectations",
        path: "/intro/expectations",
        component: Expectations,
      },
    ],
  },
  {
    id: "counter-use-case",
    title: "Counter (use case)",
    items: [
      {
        title: "Standard path",
        path: "/counter/standard-path",
        component: StandardPath,
      },
      {
        title: "Limitations",
        path: "/counter/limitations",
        component: Limitations,
      },
      {
        title: "Creating Context",
        path: "/counter/creating-context",
        component: CreatingContext,
      },
      {
        title: "Composing",
        path: "/counter/composing",
        component: Composing,
      },
    ],
  },
  {
    id: "select-use-case",
    title: "Select (use case)",
    items: [
      {
        title: "Creating Context",
        path: "/select/creating-context",
        component: CreatingContextSelect,
      },
      {
        title: "Not always too easy",
        path: "/select/not-too-easy",
        component: NotTooEasy,
      },
    ],
  },
  {
    id: "more-use-cases",
    title: "More use cases",
    items: [
      {
        title: "Slider",
        path: "/more/slider",
        component: MoreSlider,
      },
      {
        title: "Table (old)",
        path: "/more/table-old",
        component: MoreTableOld,
      },
      {
        title: "Table (composing)",
        path: "/more/table-composing",
        component: MoreTableCC,
      },
    ],
  },
  {
    id: "libraries",
    title: "Libraries",
    items: [
      {
        title: "Material UI",
        path: "/lib/material-ui",
        component: MaterialUI,
      },
      {
        title: "Reach UI",
        path: "/lib/reach-ui",
        component: ReachUI,
      },
    ],
  },
  {
    id: "close",
    title: "Closing",
    items: [
      {
        title: "Thanks",
        path: "/close/thanks",
        component: CloseThanks,
      },
    ],
  },
];
