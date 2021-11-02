import "./App.css";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import GuideCard from "./components/GuideCard/GuideCard";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ArticleCard
        article={{
          author: {
            name: "Cosima Mielke",
            profile: "https://www.smashingmagazine.com/author/cosima-mielke/",
          },
          date: "OCT 31, 2021",
          title:
            "A Splash Of Color For Misty Days (November 2021 Desktop Wallpapers Edition)",
          tags: [
            {
              name: "Wallpapers",
              tagLink: "https://www.smashingmagazine.com/categories/wallpapers",
            },
          ],
        }}
        size="main"
      />
      <ArticleCard
        article={{
          author: {
            name: "Freya Giles",
            profile: "https://www.smashingmagazine.com/author/freya-giles/",
          },
          date: "OCT 31, 2021",
          title:
            "50 Resources And Tools To Turbocharge Your Copywriting Skills",
          tags: [
            {
              name: "Tools",
              tagLink: "https://www.smashingmagazine.com/categories/tools",
            },
            {
              name: "Copywriting",
              tagLink:
                "https://www.smashingmagazine.com/categories/copywriting",
            },
            {
              name: "Content Strategy",
              tagLink:
                "https://www.smashingmagazine.com/categories/content-strategy",
            },
          ],
        }}
        size="secondary"
      />
      <ArticleCard
        article={{
          author: {
            name: "Robert Sfichi",
            profile: "https://www.smashingmagazine.com/author/robert-sfichi/",
          },
          date: "OCT 31, 2021",
          title: "How To Build An Amazon Product Scraper With Node.js",
          tags: [
            {
              name: "Node.js",
              tagLink: "https://www.smashingmagazine.com/categories/node.js",
            },
            {
              name: "JavaScript",
              tagLink: "https://www.smashingmagazine.com/categories/javascript",
            },
            {
              name: "Tools",
              tagLink: "https://www.smashingmagazine.com/categories/tools",
            },
          ],
        }}
        size="secondary"
      />
      <Newsletter />
      <div>
        <GuideCard
          title="Accessible Front-End Components"
          link="https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/"
          linkText="Explore Accessible Components"
          desc="Explore Accessible Components"
        />
        <GuideCard
          title="CSS Generators & Tools"
          desc="Useful CSS tools for animations, shadows, cubic-bezier curves, easing gradients, filters, overlays, type scales"
          link="https://www.smashingmagazine.com/2021/03/css-generators/"
          linkText="Explore CSS Generators"
        />
        <GuideCard
          title="Front-End Boilerplates & Starter Kits"
          desc="HTML boilerplates, CSS Resets, forms, dev themes, gitignore, CSS snippets, static sites, style guides"
          link="https://www.smashingmagazine.com/2021/06/useful-frontend-boilerplates-starter-kits/"
          linkText="Explore Front-End Boilerplates"
        />
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
