# Example site: netlify-plugin-trello-lists

This site only exists to demonstrate a Netlify Build Plugin.

- Learn more about the [netlify-plugin-trello-lists](https://github.com/philhawksworth/netlify-plugin-trello-lists) plugin.
- See the example site here: https://demo-plugin-trello-lists.netlify.app


## Quick try-out

You can try out this site and its plugin out by deploying it.

Clicking the button below will clone this repo, setup a new site [on Netlify](https://netlify.com?utm_source=github&utm_medium=plugin-trellolists-pnh&utm_campaign=devex) and deploy the site complete with the plugin configured and operational.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/demo-netlify-plugin-trello-lists&utm_source=github&utm_medium=plugin-trellolists-pnh&utm_campaign=devex)

## Configuration


```toml
# Config for the Netlify Build Plugin: netlify-plugin-trello-lists
[[plugins]]
  package = "netlify-plugin-trello-lists"

  [plugins.inputs]

    # The URL of a publicly visible Trello board
    trelloBoardUrl = "https://trello.com/b/twPXW2W1/netlify-plugin-trello-list-info"

    # Location of the JSON data file to be generated
    dataFilePath = "src/_data/trello.json"

    # If the plugin fails, should it do so quietly or cancel the build?
    # "failBuild" | "failPlugin"
    fail = "failBuild"

```

