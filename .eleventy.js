const htmlmin = require('html-minifier');

module.exports = function (config) {
  // html minify
  if (process.env.NODE_ENV == 'production') {
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath.endsWith('.html')) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyjs: { quote_style: 1 },
          preventAttributesEscaping: true,
          quoteCharacter: "'",
        });
        return minified;
      }

      return content;
    });
  }

  config.addFilter('getProjects', function (categories) {
    var projects = [];
    if (categories && categories.length) {
      for (i = 0; i < categories.length; i++) {
        if (categories[i].items) {
          for (j = 0; j < categories[i].items.length; j++) {
            if (categories[i].items[j].is_home) {
              projects.push(categories[i].items[j]);
            }
          }
        }
      }
    }
    return projects;
  });
  config.addPassthroughCopy('android-chrome-192x192.png');
  config.addPassthroughCopy('android-chrome-512x512.png');
  config.addPassthroughCopy('apple-touch-icon.png');
  config.addPassthroughCopy('favicon-16x16.png');
  config.addPassthroughCopy('favicon-32x32.png');
  config.addPassthroughCopy('favicon.ico');
  config.addPassthroughCopy('site.webmanifest');

  config.addPassthroughCopy('src/assets/js');
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src',
    },
  };
};
