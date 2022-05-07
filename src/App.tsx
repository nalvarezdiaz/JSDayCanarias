import { MDXProvider } from "@mdx-js/react";
import { useEffect, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Anchor from "./components/Anchor";
import BlockQuote from "./components/BlockQuote";
import Code from "./components/Code";
import { H1, H2, H3, H4, H5, H6 } from "./components/Headers/Header";
import Hr from "./components/Hr";
import Layout from "./components/Layout/Layout";

import slidesConfig from "./slides.config";

const components = {
  a: Anchor,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  pre: Code,
  blockquote: BlockQuote,
};
const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [to]);

  return null;
};

function App() {
  const items = useMemo(() => {
    return slidesConfig.flatMap(group => group.items);
  }, []);

  return (
    <MDXProvider components={components}>
      <Routes>
        {items.map((slide, index) => {
          const Component = slide.component;
          return (
            <Route
              key={slide.path}
              path={slide.path}
              element={
                <Layout
                  sidebarGroups={slidesConfig}
                  prevItem={items[index - 1]}
                  nextItem={items[index + 1]}
                >
                  <Component />
                </Layout>
              }
            />
          );
        })}
        <Route path={"*"} element={<Redirect to={items[0]?.path || "/"} />} />
      </Routes>
    </MDXProvider>
  );
}

export default App;
