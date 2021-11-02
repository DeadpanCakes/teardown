import "./PageHeader.css";

const PageHeader = () => {
  return (
    <header className="pageHeader">
      <nav>
        <ul>
          <li>
            <a href="https://www.smashingmagazine.com/">
              <img alt="Smashing Magazine" src={null} />
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/articles/">Articles</a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/guides/">Guides</a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/printed-books/">Books</a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/events/">Workshops</a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/membership/">
              Membership
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/jobs/">Job Board</a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/the-smashing-newsletter/">
              Newsletter
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/podcasts/">Podcasts</a>
          </li>
        </ul>
      </nav>
      <nav className="articleNav">
        <ul>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              CSS
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              JavaScript
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              React
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Vue
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Round-Ups
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              UX
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Design
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Web Design
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Figma
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Wallpapers
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Guides
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Business
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Career
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Privacy
            </a>
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/category/accessibility/">
              Jump to all Articles
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
