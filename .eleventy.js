module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // A handy markdown shortcode for blocks of markdown
  // coming from our data sources
  const markdownIt = require('markdown-it');
  const md = new markdownIt({
    html: true
  });
  eleventyConfig.addFilter('markdown', (content) => {
    return md.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
