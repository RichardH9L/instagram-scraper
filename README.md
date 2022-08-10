# Only certain features of Instagram Scraper work!!!

Instagram changed layout of their pages. The team is working on a prompt fix. You can find currently working configurations here: https://apify.notion.site/Instagram-Status-page-34977151996c4b53acdf0dac781b0c9f

[![Apify - Instagram Status page](https://i.imgur.com/y3iWq0e.png)](https://apify.notion.site/Instagram-Status-page-34977151996c4b53acdf0dac781b0c9f)

Use login cookies for better experience as residential proxies need a lot of retries to get all proper content.

## Features
Our free Instagram Scraper allows you to scrape posts from a user's profile page, hashtag page, or place. When a link to an Instagram post is provided, it can scrape Instagram comments.

This unofficial Instagram API is designed to give you back the functionality to access public data that was  removed from the Instagram API in 2020. It also enables anyone to extract public data from Instagram without imposing limits on whether you are an Instagram Business or Creator, or whether you are accessing public consumer account data.

The Instagram data scraper supports the following features:

- Scrape profiles - you can either scrape posts or get metadata from the profile (including followers and following if logged in)
- Scrape hashtags - query hashtags matched by search keyword - you can either scrape posts or scrape metadata from each hashtag
- Scrape places/locations - query places matched by search keyword - you can either scrape posts or scrape metadata from each place (scrolling for more posts in places/locations is only possible when logged in)
- Scrape comments - you can scrape comments from any post
- Scrape likes - you can scrape likes from any post (if logged in)
 
## Just want to scrape Instagram hashtags, profiles, posts, or comments?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
- [Instagram Post Scraper](https://apify.com/zuzka/instagram-post-scraper)
- [Instagram Comment Scraper](https://apify.com/zuzka/instagram-comment-scraper)

Or let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

## Why scrape Instagram?
Instagram has about 1 billion monthly active users and is especially popular with younger users, a demographic that can otherwise be difficult for brands to reach. With so many active users, you can imagine that there is a lot of useful data on the site.

So what could you do with that data? Here are some ideas:
- Scrape hashtags and likes to see what's becoming popular. Maybe you can get involved early or create a niche product to take advantage of short-term trends.
- Get data based on location to discover opportunities or risks that might affect your investment or business decisions.
- Scrape comments to understand how real customers see your brand or business.
- Find Instagram influencers who could help you promote your products, and track their engagement in real time.
- Collect a constantly updated dataset on your industry, city, or interests and gain insights into ongoing change.
- Carry out market or academic research that goes beyond surveys and polls.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## Tutorial
If you want to know more about how Instagram Scraper works, here's a detailed explanation and [step-by-step guide](https://blog.apify.com/scrape-instagram-posts-comments-and-more-21d05506aeb3/) with screenshots and examples.

## Is it legal to scrape Instagram?
Our Instagram scrapers are ethical and do not extract any private user data, such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe. However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Cost of usage
There are two main factors to take into account if you want to run Instagram Scraper on the Apify platform:
- [Compute units](https://apify.com/pricing/actors) - used for running the scraper
- [Residential proxy traffic](https://apify.com/pricing/proxy) - needed to access Instagram without login

The usage costs differ depending on what type of page you are scraping. Some pages, such as details, just need to be opened, while other pages, such as comments, require a lot of scrolling. You should roughly compare how long it takes to do these operations manually to get an idea about how to transfer usage costs from one use case to another.

### Using proxies
Instagram now aggressively blocks scrapers and redirects them to a login page. The only reliable solution to this problem is to use residential proxies. Datacenter proxies only work in rare cases.

### Residential proxies
Instagram scraper is free to use, although you will need to use [residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) on [Apify Proxy](https://apify.com/proxy) if you run it on the Apify platform. This is because Instagram changed the rules in 2021 and now you always need to use a residential proxy for scraping. Luckily, every new Apify account includes a small free trial of residential proxies, so you should be able to test any of our Instagram scrapers.

### Custom proxies
You can also use proxies from other providers in the custom proxies fields (`proxyUrls` in the JSON settings).

### Cost of usage for profile scraping
Scraping **1,000 profiles** requires about:
- **10 compute units**
- **0.24 GB of proxy traffic**

### Example pricing
Based on Apify's pricing at the time of writing, scraping **1,000 profiles** would cost 10 CU * $0.25 + 0.24 GB * 12.5 GB, which is a total of **$5.50**. The Apify Personal plan ($49) would allow you to scrape about 9,000 Instagram profiles monthly.

## Input parameters
The input of this scraper should be JSON containing the list of pages on Instagram that should be visited. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| search | String | (optional) Query to search Instagram for |
| pageTimeout | Integer | (optional) Defaults to 60 (seconds) |
| searchType | String | (optional, required with search) What to search Instagram for, default is "hashtag", other options are "user" or "place"  |
| searchLimit | Integer | (optional) How many search results to process, default is 20, maximum is 100. Set to 1 if you want to get the most matched one |
| directUrls | Array | (optional) List of Instagram URLs (profile or hashtag or place) |
| resultsType | String | What to scrape from each page, default is "posts", the other option is "comments" |
| resultsLimit | Integer | How many items should be loaded from each URL (limit is per page) |
| proxy | Object | Proxy configuration |
| scrapePostsUntilDate | String | (optional) Date in the past when you stop scrolling older posts |
| scrollWaitSecs | Number | How long to wait between every 100 scrolled items to prevent blocking by Instagram. This number is randomized. Default is 10 seconds. |
| loginCookies | Array | (optional) Cookies copied from logged in profile (for example using EditThisCookie extension) |
| likedByLimit | Number | (optional) How many likes should be scraped from post page (only works with login) |
| followingLimit | Number | (optional) How many following should be scraped from profile page (only works with login) |
| followedByLimit | Number | (optional) How many followers should be scraped from profile page (only works with login) |
| expandOwners | Boolean | (optional) **!Experimental!** Load additional details about post owner for each post (slows down the solution a lot) |

## Scrolling through large profiles or posts
Instagram imposes rate limits that will block scrolling if you want to scroll for more than 1,000 posts or comments. To work around this issue, the scraper starts injecting randomized wait times once you reach 1,000 posts or comments. This is configurable by means of the `scrollWaitSecs` input parameter. If you get the message that you were rate limited, consider increasing this parameter for the specific profile or post.

### Instagram scraper input example

```jsonc
{
    "search": "Náměstí míru",
    "searchType": "place",
    "searchLimit": 10,
    "resultsType": "posts",
    "resultsLimit": 100,
    "proxy": { "useApifyProxy": true, "apifyProxyGroups": ["RESIDENTIAL"] }
}
```

## During the actor run
During the run, the actor will output messages letting you know what's going on. Each message always contains a short label specifying which page from the provided list is currently being scraped. When items are loaded from the page, you should see a message about this event with a loaded item count and total item count for each page, in most cases.

If you provide incorrect input to the actor, it will immediately stop with a failure state and output an explanation of what is wrong.

## Using cookies to log in
This solution allows you to log in using the already initialized cookies of a logged-in user. If you use this option, the scraper will do as much as possible to prevent the account from being banned (slow down to just one page open at a time and introduce delays between actions).

**It's highly recommended that you don't use your own account (unless you really have to). You should instead create a new Instagram account to use with this solution.**

**Using your own account can result in the account being banned by Instagram.**

To log in using cookies, you can use a Chrome browser extension such as [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=cs). With it, just go to Instagram, log in with the account you want to use and then use the extension to export cookies. This should give you an array of cookies which you can then just paste as a value for the `loginCookies` field in input.

**If you log out of the Instagram account that is connected to the cookies, it will invalidate them and your solution will stop working.**


## Instagram output format
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node JS/NPM). See [our API reference](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

### Scraped Instagram posts
The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
  "#debug": {
    "pageType": "user",
    "id": "teslamotors",
    "userId": "297604134",
    "userUsername": "teslamotors",
    "userFullName": "Tesla",
    "limit": 1000000,
    "scrollWaitSecs": 0,
    "shortcode": "B27C4aRBfet",
    "postLocationId": null,
    "postOwnerId": "297604134"
  },
  "queryUsername": "teslamotors",
  "position": 10,
  "type": "Image",
  "shortCode": "B27C4aRBfet",
  "caption": "@hub3rt picked up his Model 3 and brought our London team a cake. \nIf there is a purer thing in this world we would like to hear about it.",
  "hashtags": [],
  "mentions": [
    "hub3rt"
  ],
  "url": "https://www.instagram.com/p/B27C4aRBfet",
  "commentsCount": 926,
  "latestComments": [],
  "dimensionsHeight": 1080,
  "dimensionsWidth": 1080,
  "displayUrl": "https://instagram.fyyc3-1.fna.fbcdn.net/v/t51.2885-15/e35/70538312_1124483511275040_7970075346943975868_n.jpg?_nc_ht=instagram.fyyc3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=UBV8F4hhd_AAX_INMgA&oh=be328b96f1ad3fbb95b54a35b8b0eb79&oe=5F0D6E0E",
  "id": "2142318720331413421",
  "alt": "Photo by Tesla on September 27, 2019. Image may contain: one or more people, people standing and car",
  "likesCount": 181500,
  "timestamp": "2019-09-27T17:11:54.000Z",
  "locationName": null,
  "locationId": null,
  "ownerUsername": "teslamotors",
  "ownerId": "297604134"
}
```

### Scraped Instagram comments
The structure of each item in Instagram comments looks like this:

```jsonc
{
  "#debug": {
    "index": 1,
    "pageType": "post",
    "id": "BwrsO1Bho2N",
    "postCommentsDisabled": false,
    "postIsVideo": false,
    "postVideoViewCount": 0,
    "postVideoDurationSecs": 0
  },
  "id": "17900515570488496",
  "postId": "BwrsO1Bho2N",
  "text": "When is Tesla going to make boats? It was so nice to see clear water in Venice during the covid lockdown!",
  "position": 1,
  "timestamp": "2020-06-07T12:54:20.000Z",
  "ownerId": "5319127183",
  "ownerIsVerified": false,
  "ownerUsername": "mauricepaoletti",
  "ownerProfilePicUrl": "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/84630643_482577542360727_932647097444859904_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=B3lQcy6UHX4AX8RjJKN&oh=1df825b662e1f1412eb21fc581c5db75&oe=5F0A760B"
}
```

### Scraped Instagram profile
The structure of each user profile looks like this:

```jsonc
{
  "#debug": {
    "url": "https://www.instagram.com/avengers/"
  },
  "id": "6622284809",
  "username": "avengers",
  "fullName": "Avengers: Endgame",
  "biography": "Marvel Studios’ \"Avengers​: Endgame” is now playing in theaters.",
  "externalUrl": "http://www.fandango.com/avengersendgame",
  "externalUrlShimmed": "https://l.instagram.com/?u=http%3A%2F%2Fwww.fandango.com%2Favengersendgame&e=ATNWJ4avEN0vwSx1YQCqQqFJst7aAFzINa-BzGZLoTVrdC6sTRTmjM9QNgWKR3URJHMxwg9x",
  "followersCount": 8212505,
  "followsCount": 4,
  "hasChannel": false,
  "highlightReelCount": 3,
  "isBusinessAccount": true,
  "joinedRecently": false,
  "businessCategoryName": "Content & Apps",
  "private": false,
  "verified": true,
  "profilePicUrl": "https://scontent-ort2-2.cdninstagram.com/vp/eaea4675dc1e937f3b449dba21ac3867/5D5DF0E0/t51.2885-19/s150x150/54446499_2222190077828037_3317168817985028096_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
  "profilePicUrlHD": "https://scontent-ort2-2.cdninstagram.com/vp/38a36006532165263f0d82c32de1d0ce/5D767E98/t51.2885-19/s320x320/54446499_2222190077828037_3317168817985028096_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
  "facebookPage": null,
  "igtvVideoCount": 5,
  "latestIgtvVideos": [
    {
      "type": "Video",
      "shortCode": "Bwr3OkpnZZ5",
      "title": "Marvel Studios’ Avengers: Endgame | “Don’t Do It”",
      "caption": "Don’t do it. #DontSpoilTheEndgame",
      "commentsCount": 115,
      "commentsDisabled": false,
      "dimensionsHeight": 1333,
      "dimensionsWidth": 750,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/1c063ea4ff0e4768a852411c74470bae/5CCD7FE3/t51.2885-15/e35/58684999_167806787545179_7836940807335402934_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 123,
      "videoDuration": 21.688,
      "videoViewCount": 77426
    },
    // ...
  ],
  "postsCount": 274,
  "latestPosts": [
    {
      "type": "Video",
      "shortCode": "Bw7jACTn3tC",
      "caption": "“We need to take a stand.” Marvel Studios’ #AvengersEndgame is in theaters now. Get tickets: [link in bio]",
      "commentsCount": 1045,
      "dimensionsHeight": 750,
      "dimensionsWidth": 750,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/c336cf708e62596cd46879656f86ad70/5CCD112C/t51.2885-15/e35/57649006_653609661751971_8438348841277997450_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 142707,
      "videoViewCount": 482810,
      "timestamp": "2019-05-01T18:44:12.000Z",
      "locationName": null
    },
    // ...
  ],
  "following": [],
  "followedBy": [],
}
```

### Scraped Instagram hashtag
The structure of each hashtag detail looks like this:

```jsonc
{
  "#debug": {
    "url": "https://www.instagram.com/explore/tags/endgame/"
  },
  "id": "17843854051054595",
  "name": "endgame",
  "topPostsOnly": false,
  "profilePicUrl": "https://scontent-ort2-2.cdninstagram.com/vp/c3074c4492e7594fdd330ff8b81cf724/5D558BBC/t51.2885-15/e15/s150x150/58410922_577374706107933_1468173581283089454_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
  "postsCount": 1510549,
  "topPosts": [
    {
      "type": "Image",
      "shortCode": "Bw9UYRrhxfl",
      "caption": "Here is the second part😂😂 Find the first part on the page\nGuess the pictures😏\n-\n-\n-\n#marvel #mcu #dceu #worldofdc #endgame #superhero #superheros #infinitywar #batman #superman #wonderwoman #iroman #captainamerica #thor #thanos #memes #news #dc #dcuniverse #power #funny #fun" "@marvel",
      "hashtags": ["marvel", "mcu", "etc..."],
      "mentions": ["marvel"],
      "commentsCount": 9,
      "dimensionsHeight": 1326,
      "dimensionsWidth": 1080,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/4d67498d0bc033cbfdf8b666d0fce6d1/5D629B3E/t51.2885-15/e35/57216878_2119889691397544_8022105877563047858_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 2342,
      "timestamp": "2019-05-02T11:14:55.000Z",
      "locationName": null
    },
    // ...
  ],
  "latestPosts": [
    {
      "type": "Sidecar",
      "shortCode": "Bw9flNKl56O",
      "caption": "Mínimo lo se mi tributo a semejante peli pero bue algo quería hacer me llore la vidaaaaa #endgame #avengersendgame #avengers #thanos #ironman #hulk #thor #makeupcomic #makeup #moviemakeup #makeupeyes #makeupfantasy #makeupavengers #makeuphero",
      "commentsCount": 0,
      "dimensionsHeight": 936,
      "dimensionsWidth": 1080,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/d97b7e434dbbb4141552c9af9c8fb05b/5D5F34FD/t51.2885-15/e35/58087917_2268263940082789_7711745336102849043_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 12312,
      "timestamp": "2019-05-02T12:52:48.000Z",
      "locationName": null
    },
    // ...
  ]
}
```

### Scraped Instagram place
The structure of each place detail looks like this:

```jsonc
{
  "#debug": {
    "url": "https://www.instagram.com/explore/locations/1017812091/namesti-miru/"
  },
  "id": "1017812091",
  "name": "Náměstí Míru",
  "public": true,
  "lat": 50.0753325,
  "lng": 14.43769,
  "slug": "namesti-miru",
  "description": "",
  "website": "",
  "phone": "",
  "aliasOnFacebook": "",
  "addressStreetAddress": "",
  "addressZipCode": "",
  "addressCityName": "Prague, Czech Republic",
  "addressRegionName": "",
  "addressCountryCode": "CZ",
  "addressExactCityMatch": false,
  "addressExactRegionMatch": false,
  "addressExactCountryMatch": false,
  "profilePicUrl": "https://scontent-ort2-2.cdninstagram.com/vp/aa8cc8c627cbddf3df270747223f5f23/5D68CDEA/t51.2885-15/e35/s150x150/57561454_2452560724777787_307886881124344332_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
  "postsCount": 5310,
  "topPosts": [
    {
      "type": "Image",
      "shortCode": "Bw6lVVZhXXB",
      "caption": "🦋🦋🦋",
      "commentsCount": 3,
      "dimensionsHeight": 750,
      "dimensionsWidth": 750,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/03de7e9343f98fdf47513a0a944c427f/5D6656A8/t51.2885-15/e35/57561454_2452560724777787_307886881124344332_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 345,
      "timestamp": "2019-05-01T09:45:20.000Z",
      "locationName": null
    },
    // ...
  ],
  "latestPosts": [
    {
      "type": "Image",
      "shortCode": "Bw9KSlIhAc-",
      "caption": "#vinohradskaprincezna #nekdotomusikontrolovat #jestezememaji #jmenujusebufinka 🐶",
      "commentsCount": 0,
      "dimensionsHeight": 1080,
      "dimensionsWidth": 1080,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/0fa17a87dee94c0c63c8973c6c0677eb/5D59EE21/t51.2885-15/e35/57506136_399700847249384_6385808161520210872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 4546,
      "timestamp": "2019-05-02T09:46:45.000Z",
      "locationName": null
    },
    // ...
  ]
}
```

### Scraped Instagram post details
The structure of each post detail looks like this:

```jsonc
{
  "#debug": {
    "requestId": "YCyUc93vUGzK9eA",
    "url": "https://www.instagram.com/p/BwrsO1Bho2N",
    "loadedUrl": "https://www.instagram.com/p/BwrsO1Bho2N/",
    "method": "GET",
    "retryCount": 0,
    "errorMessages": null
  },
  "type": "Sidecar",
  "shortCode": "BwrsO1Bho2N",
  "caption": "Newly upgraded Model S and X drive units rolling down the production line at Gigafactory 1 #tesla #model3 @elonmusk",
  "hashtags": ["tesla", "model3"],
  "mentions": ["elonmusk"],
  "position": 1,
  "url": "https://www.instagram.com/p/BwrsO1Bho2N",
  "commentsCount": 711,
  "latestComments": [
    {
      "ownerUsername": "mauricepaoletti",
      "text": "When is Tesla going to make boats? It was so nice to see clear water in Venice during the covid lockdown!"
    },
    // ...
  ],
  "dimensionsHeight": 1350,
  "dimensionsWidth": 1080,
  "displayUrl": "https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-15/e35/57840129_308705413159630_8358160330083042716_n.jpg?_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=g7JIBg70oHMAX_QGayb&oh=1402875349a6d1cd8693f14f2b617fd6&oe=5F0DBA1F",
  "id": "2029910590113615245",
  "firstComment": "@miszdivastatuz",
  "likesCount": 153786,
  "timestamp": "2019-04-25T14:57:01.000Z",
  "locationName": "Tesla Gigafactory 1",
  "locationId": "2172837629656184",
  "ownerFullName": "Tesla",
  "ownerUsername": "teslamotors",
  "ownerId": "297604134",
  "captionIsEdited": false,
  "hasRankedComments": false,
  "commentsDisabled": false,
  "displayResourceUrls": [
    "https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-15/e35/57840129_308705413159630_8358160330083042716_n.jpg?_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=g7JIBg70oHMAX_QGayb&oh=1402875349a6d1cd8693f14f2b617fd6&oe=5F0DBA1F",
    "https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-15/e35/56744724_532173877312018_171181625703519178_n.jpg?_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_zTxcKu_hyYAX9KtDax&oh=175f7e2fceb3f6b20f84e148baf4d9f9&oe=5F0C7535"
  ],
  "childPosts": [
      // ...
  ],
  "locationSlug": "tesla-gigafactory-1",
  "isAdvertisement": false,
  "taggedUsers": [],
  "likedBy": []
}
```

## Extend output function
You can use this function to update the result output of this actor.

Return `null` to omit the output of the item.

```js
async ({ data, item, itemSpec, page, request, customData, label }) => {
    // data variable is the raw object before parsing, that becomes the item
    delete item.displayResourceUrls;
    item.alt = 'N/A';
    item.additionalField = customData.additionalField; // comes from the input

    // each result type has it's own label
    switch (label) {
        case 'comment':
            break;
        case 'details':
            break;
        case 'post':
            if (!item.caption?.include('cute')) {
                return null; // omits output for posts without the alt text containin the word 'cute'
            }
            break;
        case 'stories':
            break;
    }

    return item; // return the modified item to be output
}
```

This example will add a new field `additionalField` that comes from the input, change the `alt` field and remove `displayResourceUrls` field.
Note that the return value of this function has to be an object or an array.

You can split your result into individual items, so as to make it CSV friendly or to output one item per profile post, for example:

```js
async ({ data, item, itemSpec, page, request, customData, label }) => {
    if (label === 'details') {
        // details means it's going to output a profile item

        const { latestPosts, ...profile } = item;
        // split the latestPosts one per row, by returning an array
        return latestPosts.map((post) => {
            return {
                profile,
                ...post
            }
        });
    }

    return item;
}
```

## Extend Scraper Function
This parameter allows you to add additional functionalities to the scraper. You can access inner functionalities, add profiles, posts and searches on the fly:

```js
async ({ label, addProfile, addLocation, crawler, Apify }) => {
    if (label === 'START')  {
        await addProfile('elonmusk'); // add profile by username
        await addLocation(274885506); // add location by id, this is prague
        await addHashtag('prague'); // add hashtag, not using #
    } else if (label === 'FINISH') {
        // scraper finished, display stats
        Apify.utils.log.info('STATS', crawler.stats.toJSON());
    }
}
```

You can also interact with the page:

```js
async ({ page, label, response, Apify }) => {
    if (label === 'HANDLE' && page.itemSpec.pageType === 'post') {
        // we are inside the handlePageFunction, after every comment is being loaded
        const spans = await page.$x('//span[@class="EizgU" and contains(.,"View")]');
        // this is the "View replies" button, will trigger the label below after clicking
        await Promise.all(spans.map((s) => s.click()));
    } else if (label === 'RESPONSE' && response.request().url().includes('1ee91c32fc020d44158a3192eda98247')) {
        // RESPONSE is the event listener for page.on('response')
        // 1ee91c32fc020d44158a3192eda98247 is the query hash for threaded comments
        const { data } = await response.json();
        // deal with the data.comment.edge_threaded_comments.edges array
        await Apify.pushData(data);
    }
}
```
## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Changelog
This scraper is under active development, so check [CHANGELOG.md](./CHANGELOG.md) for new features and fixes.

## Notes
This scraper clicks cookies and privacy consent dialogs on your behalf.
