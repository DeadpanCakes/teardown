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
      <div className="content">
        <main>
          <ArticleCard
            article={{
              author: {
                name: "Cosima Mielke",
                profile:
                  "https://www.smashingmagazine.com/author/cosima-mielke/",
              },
              date: "OCT 31, 2021",
              title:
                "A Splash Of Color For Misty Days (November 2021 Desktop Wallpapers Edition)",
              summary:
                "November is just around the corner, and with it, a new collection of desktop wallpapers to celebrate the beginning of the month. Designed by creatives from all across the globe, they come in versions with and without a calendar. Let’s make November colorful!",
              tags: [
                {
                  name: "Wallpapers",
                  tagLink:
                    "https://www.smashingmagazine.com/categories/wallpapers",
                },
              ],
              link: "https://www.smashingmagazine.com/2021/10/desktop-wallpaper-calendars-november-2021/"
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
              link: "https://www.smashingmagazine.com/2021/10/resources-tools-turbocharge-copywriting-skills/"
            }}
            size="secondary"
          />
          <ArticleCard
            article={{
              author: {
                name: "Robert Sfichi",
                profile:
                  "https://www.smashingmagazine.com/author/robert-sfichi/",
              },
              date: "OCT 31, 2021",
              title: "How To Build An Amazon Product Scraper With Node.js",
              tags: [
                {
                  name: "Node.js",
                  tagLink:
                    "https://www.smashingmagazine.com/categories/node.js",
                },
                {
                  name: "JavaScript",
                  tagLink:
                    "https://www.smashingmagazine.com/categories/javascript",
                },
                {
                  name: "Tools",
                  tagLink: "https://www.smashingmagazine.com/categories/tools",
                },
              ],
              link: "https://www.smashingmagazine.com/2021/10/building-amazon-product-scraper-nodejs/"
            }}
            size="secondary"
          />
        </main>
        <Newsletter />
        <div className="guides">
          <GuideCard
            title="Accessible Front-End Components"
            link="https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/"
            linkText="Explore Accessible Components"
            desc="Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs."
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
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
