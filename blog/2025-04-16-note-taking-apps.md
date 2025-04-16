---
slug: apps
title: Note taking apps comparison
authors: cyber-syntax
tags: [apps]
---
## Obsidian (Winner for now)
### Why I use it?
- Easy to sync notes across multiple devices.
- So fast compared to other alternatives.
- Uses .md files. If something goes wrong with Obsidian, I would be able to switch to another app.
### Disadvantages
- It isn't open source.
  - If they close the app, you need to handle tags in a different app again. (You don't if you use markdown links.)
- <u>You are going to feel like somebody is reading your notes.</u>
    - I don't store sensitive information in Obsidian to solve this problem and I am not think about it so much which I don't want to waste my time on it. I couldn't find any open source alternative that is as good as Obsidian therefore I need to use it.
    - They say they don't, but how can we trust them if we don't know the source? Maybe reverse engineering, but I don't know how to do that, and I didn't find any information about Obsidian. Even if we do that and find out they don't read, we can't do that every time. That means they can change the code, and we need to reverse engineer continually to find out what is going on. Maybe closing the network for Obsidian can work, but that can be advanced to create a sandbox and close the network. Also, this would lead us to not be able to use extensions, which include a bunch of useful extensions.

<!-- truncate -->
## SiYuan
### Why I don't use it?
#### Sync
- There is no compatibility with the Syncthing app. You need to either pay for their implemented sync or use manual sync.
#### Advantages
- Dashboard usage.
- Easy to use markdown for tags and references via their WYSIWYG open-source editor.
- Open source.
#### Privacy
- All data is kept on the device under full control of the user.
#### Disadvantages
- They have opt-in telemetry. You can disable it, but it is commonly considered bad for privacy.
- It doesn't use plain markdown files.
- There is no compatibility with the Syncthing app.
- WebDAV can't be used without signing up for SiYuan.
- There is no option for automatic markdown export.
- Uses Google Analytics and Sentry SDK for diagnostic reports and usage tracking. These don't include personal information and **can be disabled** easily from settings (about).
## Logseq
### Why don't I use it?
- Logseq uses bullets for every note, and it doesn't use plain markdown files. That's why I didn't choose Logseq.
### Privacy
> https://blog.logseq.com/privacy-policy/
- They use opt-in telemetry. You can disable it, but it is commonly considered bad for privacy.
> I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
### Advantages
- Open source.
### Disadvantages
- It doesn't use plain markdown files.
## Dendron
### Why don't I use it?
- Maintainer Kevin stopped actively developing. (Safe to use because he and his team continue to use and update it if necessary.)
#### Disadvantages
- Publishing service is paid.
- It's not like SiYuan's WYSIWYG editor. You can't create a dashboard and lack good-looking pages.
- Exporting files to a folder hierarchy is experimental. If you switch from Dendron to another, you need to handle all the files via script (it probably takes a lot of time to achieve a good one) or manually (it's going to take a lot of time to do that, and I would probably choose a written script over doing that manually).
  - But you can access every markdown file.
    - For example: `webschool.linux`​​​ is for the _linux_ markdown file, `webschool.linux.appinformation`​​​ is for the _appinformation_ markdown file.
#### [Privacy](https://www.dendron.so/privacy)
- I didn't see any Google Analytics, but they use some third-party companies to get logs about usage to the extension.
#### Advantages
- Could be helpful for programming notes.
- Publishing for blogs, wikis on GitHub, etc.
  - Only for premium users.
- Revisiting notes would be faster.
- Performance is much better than other applications.
- It doesn't use an old-fashioned folder hierarchy.
  - This is the default behavior to create this note: `webschool.linux.appinformation.loqseqvssiyuanvsothers.md`​​, and there is no folder for webschool, linux, or any other categories. Just markdown files.
- There is a tree view option for folder hierarchy viewing.
## Affine
### Why don't I use it?
- You need an account to sync with your other devices, and they will collect data whenever you use it.
- There are so many things going on while using it. I mean, I can't try to learn hundreds of features from the beginning... It's like a never-ending cycle: you learn something, then need to learn something new, and often forget what you learned first, going back and forth.
- I occasionally experience performance issues such as freezing and lag. I believe this occurs due to the heavy use of visual effects. It has a significant impact on the visuals.
## Appflowy
### Why don't I use it?
- It's still in development, and I don't want to use an app that is not stable.
## Anytype
### Why don't I use it?
- They use Google Analytics and other third-party services (Calendly, Typeform).
#### What we collect
> ##### Log, device, and behavioral data
> When you access the site, we collect log data. This log data includes your IP address, location, browser type and some settings, the date and time of your request, and how you used the website.
> The above information is stored on our servers located in the European Union.
> By employing analytics tools, we use this data to better evaluate our traffic sources and marketing efforts. Analytics are anonymized and stored on the servers of our analytics service providers.
> For more information on how our analytics providers process your data, please see the following:
> - [Fathom Analytics Privacy Statement](https://usefathom.com/compliance)
> ##### E-mail address
> Your e-mail address will be collected in the following instances, with your explicit consent:
> - If you choose to download our app
