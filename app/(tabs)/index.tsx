import { Image, StyleSheet, Platform } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ListItem } from "@/components/ListItem";

const data = [
  {
    emails: [
      {
        from: "Storyblocks <hello@storyblocks.com>",
        unsubscribeLink:
          "<mailto:unsub-0ddb2ea2.xvqhg.lk0uuo1mnz02@bnc3.mailjet.com>, <https://xvqhg.mjt.lu/unsub2?m=AWkAAEPmAGMAAAAVsAIAAJZOBdkAAAAAmRYAAVLNABNKOwBmT6rSvSmkXfvzS6KVOtj35T97ewATOp4&b=0ddb2ea2&e=bbd0d3ab&x=g035JhKcqmxrFecvmzqHDFWA4zV4cBxMlMedjy45PR4>",
      },
      {
        from: "Storyblocks <hello@storyblocks.com>",
        unsubscribeLink:
          "<mailto:unsub-7855c427.xvqhg.lk0uuoszt28y@bnc3.mailjet.com>, <https://xvqhg.mjt.lu/unsub2?m=AWkAAELStaoAAAAVYDQAAJZOBdkAAAAAmRYAAVLNABNKOwBmQ7NN2JlmrLCxTlSTLufH9xYvvQATOp4&b=7855c427&e=fc6ff5aa&x=g035JhKcqmxrFecvmzqHDFWA4zV4cBxMlMedjy45PR4>",
      },
    ],
    companyName: "storyblocks",
    companyLogo: "https://logo.clearbit.com/storyblocks.com",
    unsubscribeLink:
      "<mailto:unsub-0ddb2ea2.xvqhg.lk0uuo1mnz02@bnc3.mailjet.com>, <https://xvqhg.mjt.lu/unsub2?m=AWkAAEPmAGMAAAAVsAIAAJZOBdkAAAAAmRYAAVLNABNKOwBmT6rSvSmkXfvzS6KVOtj35T97ewATOp4&b=0ddb2ea2&e=bbd0d3ab&x=g035JhKcqmxrFecvmzqHDFWA4zV4cBxMlMedjy45PR4>",
    emailId: "hello@storyblocks.com",
  },
  {
    emails: [
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVA0BUAUNAQcAVg4CUQBFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17164035812046407-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVAoDVAAGAwcBWwAPUANFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17163270332198914-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVAsCUwcCBgYBWw8DUg9FWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17162307763197538-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVAgFVwMCBQEJVgoPVwZFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17161443754942961-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVwEJVgENAA0AVQ8OUgJFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17158851808077835-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVw4AUQMNAQwEUw4PVAFFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17157123819416956-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVw8DVgkNAAEDWwwCVgVFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17156259804394472-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVwwCWgUCBQcIUAkPWA9FWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17155395752821998-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
      {
        from: "Groww Digest <noreply@digest.groww.in>",
        unsubscribeLink:
          "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVwgIUAkCCAcGUgwPVA5FWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17151939782604959-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
      },
    ],
    companyName: "groww",
    companyLogo: "https://logo.clearbit.com/groww.in",
    unsubscribeLink:
      "<https://unsub-api.netcorecloud.net/YHNMJN?id=178520=N0QGUAABBVRRTkYRFhJDRhhERRkUFEZCGRFDEBUQFRBCGBZBFxkQRkESRhEWEkNGGFQZW0FHDwxcQhBHXERdRANWXxJfXlEUBnIBXFdbD0hbCwhFBQNXVA0BUAUNAQcAVg4CUQBFWBIVQhULGR0WCEsRBxRVRA9MV1QXU1pCUFMOV0MFGVdVEk5rLn97eC1ZUQAZTwc=>, <mailto:17164035812046407-178520-fncunsub@usub.ftrans03.com?subject=Unsubscribe>",
    emailId: "noreply@digest.groww.in",
  },
  {
    emails: [
      {
        from: "The Browser Company <members@arc.net>",
        unsubscribeLink:
          "<https://company.us6.list-manage.com/unsubscribe?u=73c2f0478f1b3cd8343ae8f45&id=3de31cbb2f&t=h&e=4a134d7327&c=fecabf95e4>, <mailto:unsubscribe-mc.us6_73c2f0478f1b3cd8343ae8f45.fecabf95e4-4a134d7327@unsubscribe.mailchimpapp.net?subject=unsubscribe>",
      },
      {
        from: "The Browser Company <members@arc.net>",
        unsubscribeLink:
          "<https://company.us6.list-manage.com/unsubscribe?u=73c2f0478f1b3cd8343ae8f45&id=3de31cbb2f&t=h&e=4a134d7327&c=1b34ad3381>, <mailto:unsubscribe-mc.us6_73c2f0478f1b3cd8343ae8f45.1b34ad3381-4a134d7327@unsubscribe.mailchimpapp.net?subject=unsubscribe>",
      },
    ],
    companyName: "arc",
    companyLogo: "https://logo.clearbit.com/arc.net",
    unsubscribeLink:
      "<https://company.us6.list-manage.com/unsubscribe?u=73c2f0478f1b3cd8343ae8f45&id=3de31cbb2f&t=h&e=4a134d7327&c=fecabf95e4>, <mailto:unsubscribe-mc.us6_73c2f0478f1b3cd8343ae8f45.fecabf95e4-4a134d7327@unsubscribe.mailchimpapp.net?subject=unsubscribe>",
    emailId: "members@arc.net",
  },
  {
    emails: [
      {
        from: "Substack <on+news@substack.com>",
        unsubscribeLink:
          "<https://on.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDkwMjgyNiwiaWF0IjoxNzE2NDgwMDE0LCJleHAiOjE3MTkwNzIwMTQsImlzcyI6InB1Yi0xIiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9._Fh5U0gfHk8Gm_jLvYVgPq9h38jVcc6fCz699hSK0aM&expires=365d>",
      },
      {
        from: "Aakash Gupta from Product Growth <aakashgupta+getting-a-pm-job@substack.com>",
        unsubscribeLink:
          "<https://www.news.aakashg.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDgwNDQ3MiwiaWF0IjoxNzE2NDA1NjgxLCJleHAiOjE3MTg5OTc2ODEsImlzcyI6InB1Yi00NTQwMDMiLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.OyTCzo7uIdxiN4wTba7koTw38Q73PZnhtBc1uoyTik8&expires=365d>",
      },
      {
        from: "Substack <on+stories@substack.com>",
        unsubscribeLink:
          "<https://on.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDgzMTg4MCwiaWF0IjoxNzE2Mzg5MDI1LCJleHAiOjE3MTg5ODEwMjUsImlzcyI6InB1Yi0xIiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.3DyGAh9oGSPe8ovPTsLQJuVNWsxeRJ_4N2mY7ZeZTeQ&expires=365d>",
      },
      {
        from: "The Pragmatic Engineer <pragmaticengineer@substack.com>",
        unsubscribeLink:
          "<https://newsletter.pragmaticengineer.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDg0NTE0MCwiaWF0IjoxNzE2MzA5MDk0LCJleHAiOjE3MTg5MDEwOTQsImlzcyI6InB1Yi00NTg3MDkiLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.FI3jP8EcOaZCkEsRpj7yet2ahDJaPQJ_kxMkNHSAFeo&expires=365d>",
      },
      {
        from: "Kristi from Wildhood Wanted <wildhoodwanted@substack.com>",
        unsubscribeLink:
          "<https://wildhoodwanted.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDgxMDIxMiwiaWF0IjoxNzE2Mjk1MzczLCJleHAiOjE3MTg4ODczNzMsImlzcyI6InB1Yi0xOTAzMjU4Iiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.b0B7hi-aSNsRVHYGc6SlbvbA6ssIiDPMmis5V3zIKUM&expires=365d>",
      },
      {
        from: "Alex Elle <alexelle@substack.com>",
        unsubscribeLink:
          "<https://alexelle.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDc2NTg1MCwiaWF0IjoxNzE2MTE2NTk2LCJleHAiOjE3MTg3MDg1OTYsImlzcyI6InB1Yi0xMTcxNTM4Iiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.jSQu8anpP3lu6L-fY0Eqx7lw_EHSVzWkGLRH1lwKmuQ&expires=365d>",
      },
      {
        from: "Aakash Gupta from Product Growth <aakashgupta@substack.com>",
        unsubscribeLink:
          "<https://www.news.aakashg.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDczNjEwOCwiaWF0IjoxNzE2MDg0NTgxLCJleHAiOjE3MTg2NzY1ODEsImlzcyI6InB1Yi00NTQwMDMiLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.kaFHb9MnEwxfdW56gcEqOI6kohp9jxuGATJkVW5nqQU&expires=365d>",
      },
      {
        from: "Substack Reads <read@substack.com>",
        unsubscribeLink:
          "<https://read.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDY5NTgwNCwiaWF0IjoxNzE2MDM5Mzg0LCJleHAiOjE3MTg2MzEzODQsImlzcyI6InB1Yi03MzcyMzciLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.OphkJzssim_7zYSdIyg9AxiOPyx1xjcXrFcIThHxqps&expires=365d>",
      },
      {
        from: "Alex Elle <alexelle@substack.com>",
        unsubscribeLink:
          "<https://alexelle.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDczMTE1NiwiaWF0IjoxNzE1OTY4ODE2LCJleHAiOjE3MTg1NjA4MTYsImlzcyI6InB1Yi0xMTcxNTM4Iiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.5BX8tLL0K5Ry68FN_EKJgHQ3zwJq7FLATGJHvydAyBI&expires=365d>",
      },
      {
        from: "Substack Reads <read@substack.com>",
        unsubscribeLink:
          "<https://read.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOm51bGwsImlhdCI6MTcxNTcyNjE2OCwiZXhwIjoxNzE4MzE4MTY4LCJpc3MiOiJwdWItNzM3MjM3Iiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.szP6i2N79lNOpz9wPZNO4m38SdPaUkcTxgfb8N5KU18&expires=365d&section_id=54075>",
      },
      {
        from: "The Pragmatic Engineer <pragmaticengineer@substack.com>",
        unsubscribeLink:
          "<https://newsletter.pragmaticengineer.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDYyNTgwMCwiaWF0IjoxNzE1NzAxNjA3LCJleHAiOjE3MTgyOTM2MDcsImlzcyI6InB1Yi00NTg3MDkiLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.1kGmeuG5mzNrg2Na8gT9fC8cSpzlAEdZPTO75u2cF40&expires=365d>",
      },
      {
        from: "Kristi from Wildhood Wanted <wildhoodwanted@substack.com>",
        unsubscribeLink:
          "<https://wildhoodwanted.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0MzU4MjU1NywiaWF0IjoxNzE1Njg5Mzc4LCJleHAiOjE3MTgyODEzNzgsImlzcyI6InB1Yi0xOTAzMjU4Iiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.nWWwcLo7Zwk3rxzgZpPu6aUrU8MY30mprpYuUgDFrQY&expires=365d>",
      },
      {
        from: "Aakash Gupta from Product Growth <aakashgupta+getting-a-pm-job@substack.com>",
        unsubscribeLink:
          "<https://www.news.aakashg.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDUzNDQ5MSwiaWF0IjoxNzE1NDc2MTM1LCJleHAiOjE3MTgwNjgxMzUsImlzcyI6InB1Yi00NTQwMDMiLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.RnPk2ac-HiHmnMT2tR4pP7sSn72KmAvdMrEOVUx_fJg&expires=365d>",
      },
      {
        from: "Substack Reads <read@substack.com>",
        unsubscribeLink:
          "<https://read.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDQ3MDI1OSwiaWF0IjoxNzE1NDM0NDg4LCJleHAiOjE3MTgwMjY0ODgsImlzcyI6InB1Yi03MzcyMzciLCJzdWIiOiJkaXNhYmxlX2VtYWlsIn0.Nwn-7jIlSHXiR3molGY51DT-bwGKI-pSW-qqJgRW7lw&expires=365d>",
      },
      {
        from: "Substack <on+resources@substack.com>",
        unsubscribeLink:
          "<https://on.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDE3OTY2NywiaWF0IjoxNzE1MjcxNTA3LCJleHAiOjE3MTc4NjM1MDcsImlzcyI6InB1Yi0xIiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9.AUX6yvdUSe12v5GKB93Oy0fBY7a3VJTE7UxxL7NbXMI&expires=365d>",
      },
      {
        from: "Substack <no-reply@substack.com>",
        unsubscribeLink:
          "<https://substack.com/api/v1/email/notification/unsubscribe?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInRvcGljIjoicmVhZGVyX3B1YmxpY2F0aW9uX3JlY29tbWVuZGF0aW9uIiwiaWF0IjoxNzE1MjEyMzYxLCJleHAiOjE3MTc4MDQzNjEsImlzcyI6InB1Yi0wIiwic3ViIjoibm90aWZpY2F0aW9uLXVuc3Vic2NyaWJlIn0.we1qK1YYb6DbMe9NoHuPDiIWiRwksDesVHzQ2ppc888>",
      },
    ],
    companyName: "substack",
    companyLogo: "https://logo.clearbit.com/substack.com",
    unsubscribeLink:
      "<https://on.substack.com/action/disable_email/disable?token=eyJ1c2VyX2lkIjoxNjc4MDAzMTcsInBvc3RfaWQiOjE0NDkwMjgyNiwiaWF0IjoxNzE2NDgwMDE0LCJleHAiOjE3MTkwNzIwMTQsImlzcyI6InB1Yi0xIiwic3ViIjoiZGlzYWJsZV9lbWFpbCJ9._Fh5U0gfHk8Gm_jLvYVgPq9h38jVcc6fCz699hSK0aM&expires=365d>",
    emailId: "on+news@substack.com",
  },
  {
    emails: [
      {
        from: "Amity University Online <learn@amityonline.com>",
        unsubscribeLink: "",
      },
      {
        from: "Amity University Online <learn@amityonline.com>",
        unsubscribeLink: "",
      },
      {
        from: "Amity University Online <learn@amityonline.com>",
        unsubscribeLink: "",
      },
    ],
    companyName: "amityonline",
    companyLogo: "https://logo.clearbit.com/amityonline.com",
    unsubscribeLink: "",
    emailId: "learn@amityonline.com",
  },
  {
    emails: [
      {
        from: "Ankit from Topmate <ankit@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit Agarwal <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f96a71fe0-95527f53-5b4e-4b28-9bb4-e56d76a9f696-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f96a71fe0-95527f53-5b4e-4b28-9bb4-e56d76a9f696-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f96a71fe0-95527f53-5b4e-4b28-9bb4-e56d76a9f696-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit from Topmate <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f8c1c3186-62116f67-0141-4ea3-8ddf-a8abc1b3d85a-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8c1c3186-62116f67-0141-4ea3-8ddf-a8abc1b3d85a-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8c1c3186-62116f67-0141-4ea3-8ddf-a8abc1b3d85a-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit Agarwal <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f8b7a66c2-35139b02-7bf8-4fb2-8377-2fb6a9d83319-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8b7a66c2-35139b02-7bf8-4fb2-8377-2fb6a9d83319-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8b7a66c2-35139b02-7bf8-4fb2-8377-2fb6a9d83319-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Topmate <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f8123c12a-17161e1f-86d7-47c0-afbc-5fae58223736-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8123c12a-17161e1f-86d7-47c0-afbc-5fae58223736-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f8123c12a-17161e1f-86d7-47c0-afbc-5fae58223736-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit from Topmate <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f7c56095a-0f7ec9f4-0638-47de-80e2-42daf2465b1f-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f7c56095a-0f7ec9f4-0638-47de-80e2-42daf2465b1f-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f7c56095a-0f7ec9f4-0638-47de-80e2-42daf2465b1f-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit Agarwal <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f72ae3166-74b9a894-d23b-4d9d-b5ed-2a475c9f7807-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f72ae3166-74b9a894-d23b-4d9d-b5ed-2a475c9f7807-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f72ae3166-74b9a894-d23b-4d9d-b5ed-2a475c9f7807-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit from Topmate <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f70b8ee3e-3a6b1d6e-c83f-4960-9304-41ea51f7d1a0-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f70b8ee3e-3a6b1d6e-c83f-4960-9304-41ea51f7d1a0-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f70b8ee3e-3a6b1d6e-c83f-4960-9304-41ea51f7d1a0-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Yash from Topmate <yash@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f623c58f3-c000ed7e-7b72-4bc4-9c10-f9470e15fd23-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f623c58f3-c000ed7e-7b72-4bc4-9c10-f9470e15fd23-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f623c58f3-c000ed7e-7b72-4bc4-9c10-f9470e15fd23-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
      {
        from: "Ankit Agarwal <support@topmate.io>",
        unsubscribeLink:
          "<mailto:unsubscribe-0109018f5e73ebcf-bd9fd899-034c-40d2-b145-87cf11ce280e-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f5e73ebcf-bd9fd899-034c-40d2-b145-87cf11ce280e-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018f5e73ebcf-bd9fd899-034c-40d2-b145-87cf11ce280e-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
      },
    ],
    companyName: "topmate",
    companyLogo: "https://logo.clearbit.com/topmate.io",
    unsubscribeLink:
      "<mailto:unsubscribe-0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000@ap-south-1.amazonses.com?subject=https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000%3Ft%3D41f7a07a-4104-4d23-8595-1d58eceb17b3>, <https://o.ap-south-1.user-subscription.com/oc/f3c768ed-1915-410c-82ee-bdb1928095c4/0d2d9b7f-457a-423a-95c2-2f3f1b9728f9/0109018fa5d9a1e5-41aaf230-cb4e-43ab-bac5-401746a6c92c-000000?t=41f7a07a-4104-4d23-8595-1d58eceb17b3>",
    emailId: "ankit@topmate.io",
  },
  {
    emails: [
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%2475Q6ernetqlgVzARAj8fOA%3D%3D%24pn2f4hptOLVHHL9iK%2Bj1FlhXsSjuXRPo0HYmMc%2B6sWk9WgBfPdv1d7qklY7V%0AG2TToQOK1HAcBWhv5mNIiNVHAVOhYfxUlntC1c2AfJotzWbpLCjwud042DVy%0AdeBf0vEnuvMUGCIlVN0gQP5syY45jUtCxW%2FwAT2o7jYWI%2F0ucaZv3KC1mvbf%0ARVSsNOsM28cShbuXVr1kMjykXmmlchwkbQIoLGohMnT6gxaiDKIK20jQKp2W%0AHen90vutyf%2FKHb0fdne%2BM4gKeuxJIzl%2FtgYv%2BXGOYgzS8PSUhBaXAwa0oN%2Bs%0A9G%2FaxRChfi8JYQqOS89u5nNWdCIUBdNzc%2FDbkMkVOQ%3D%3D&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaefklnlyk1j19qyx8pgyx5xs2f6omluivo@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44b2ch2c9st80ra6x825vjzthwhwe2bvhrjzwj20eug8ymdgslehzd699ld9r4z6ps1jznfg8z6lez2031pux2r616w9o669kt62jx-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24HoSc5HC73iAUJAsSAPE2eQ%3D%3D%24cjMIMY%2F3FHsf0984qeNFkAouOzcq038KO7jI4Nc288k9HuV5EHjfN1ADT2nX%0AnzNEkQ7x5n4XypLKwy3fVOsVMLTtO7qq%2BbHr7diaruD1Bq6piyANWB2XxsdC%0AxZLNh3Btc1nuXE8MBdKp2iv6iv8RWKVVzB3Mu8T9Z7OuCrZYL5Qo4AgXNA70%0AWAby2cPhvQqkJ3BGxE2BXhX7jo7oMi5A3fYfWjMYwWbbwuEeob0ciYeDlI74%0AMlR0xntyQx4Dq4dDiCX%2FHQd6YxO10Gn5xfMf4QBKxBc5U%2FPnxEXHeCDhs%2BaH%0A4u0KsRuzjMy5yM8XXKDm&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaefi9jv4uwg93ofye2likbz6gsn62mk4um@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44avdlpcy1vd5oagays1755uydu9o7nxkfxv15ynrh70r99b2jvne4n29b7pwd64k0gfaqjn3lrilo0t0oh6unkhqam28e4r6ic225-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24ewMY1xj7ri2CRnFu5RvD2g%3D%3D%24TIRiYjHUCVE9XrLbRPGEihbNxSZSvD7Z7rZ2JyEK%2BtpvdjoTefd0NMI7F%2F5W%0AzI073wc3xQe3KFWC3wDJPgEmpccpf2we%2BSkbgi8MRGWLEOMjVT4oiN0yLvo4%0Awpn%2Fdc82O17a4kve7ArmO6ntxYzYLC8Y2QMK4dxuZfDnzAU67wj7RAzpIaFa%0AVfjgOAwh7lG8aRnXuLK88HMDIjGnigJgQj%2FryxV1bIjetH7ZzbuUWSyGMBHO%0A2RWzuqNk8wkRhP%2BsSsqxr8UoQyV8IGUsH9vfDKELyvOUKIPFOX3zbVsojMrN%0AJkhvN6JbeNj2uIqnt%2FoW&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaef9qklf9bmh713gh5yqk21hburwm8s2l4@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44aul2kz3b3w2nmb8i4cienk2xq9ibhlvexy0k8leirs759tx3xce46ml1c7c08247q0bubz4lgn00v3b2zu9k0z1ufy35vqgscx9p-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24Aawa7A3pDAPhwN1c403i7g%3D%3D%24vmsFt5e5mOPKkFIwO6ygH9KaKtqQZCFBjZm3csp7Pa1mM%2FEs28cDMdIBlHNy%0AOfzT8ZDkXZnR6liOAvVM83ydVnWcZ1swT%2BOqz0GzZ8LIgeGQuDnau3BcOuQW%0AXC3h%2FqJRQ8pfKV7DFT%2FnXOyeGFwc0hhDGUyJtetRo7xAiuIC794gHfX%2Fywjo%0AoUXABhJswCEU0avl2NBxQnaDtyxb4BHxZ9YLtkMM39bu8oCWeRKWZP7vpz10%0AMpszXBJIN%2FH1LbwlWJgCAXFNrJ53SSVznVXmbA%2FR4JCZRi5eMJdyG1dsTldO%0Ap7hK3EX1Dy3J%2F03lUsQy&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaed9jr9qgegi8trqstk826gin42fowg1hs@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44aujyywrr551xlxg0dxtxd7eg4ms0bulhtl8wyf9rbbgxomhx6psrlgzaqwn6dov1eq3yanvviwvo2d0gs2gydra0muhadydfoar1-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24KeRhd5koTYlpfKX5nSsdUA%3D%3D%24uVxGe0SLPA%2B33WtzyD9jsXOuXfCZxAIB%2BrQRtbpuz2B%2FWzTr5lfMUUfWfLKZ%0A1nxNTbWmRuMWxgic0FlSCb5I9IQZpeA0Y2PuX16RnbKln0AkVO5iAmOxmiyA%0AhXwcqm43FqHDw0rWVNNZh3xWInZ3Q0XToe5qiIyIN%2Bpuk0z%2BXg0ceLFzWU25%0AqWVXw9vnbfZQTRyWA7OxtE1eyZCw7EVSZClg1izSoiw784qd2VgLyh7n20vb%0AL8CQbIieaePCh1rJTcz%2F%2FszQyE7JFtRSaPj%2FiQGVa5aoCQlPpwtkaIrOEFrN%0AsboiuKy7vtIfBRZ5BcJ8&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaed7k9oqet6j7cmhbq2mkwkz8olkifurgh@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44au3uik827uw9k1it34hldmzrc3gn11rbgcukoe8ilnxzk1stfmxg4va5a3y3sk02qd8baj5wvrkvdwkz1sox7jgct37olajgzkod-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%243jQHyS6BBnGjfPINrCfbUw%3D%3D%247SbT%2BoUUKFhnY7lx8%2BmrHU1HWuKluTNh4nCzfRP55SkC9EX8BOq0wqE%2Bq3iI%0AvNlGnI0OHlHCRPKZm8F1G0nbOG5iCHgYCIOUApjGcZws494nmRh7jslipVwz%0AR%2BVP2YulG%2BDEKQKjqfQAxjS5bAVJJlHPv2jSWjRqpWQfqwKnm2T1h1fm7mlt%0AHset%2BoJLl0SCCWtwEHL1SE%2BVwgXGeS9%2Fap%2FsMPtQawq825GGA9w2V7Px7zyV%0AvOAdX3aYhAXWpQ%2Fn9SDiHHSnyfjEVkOy%2BNGqfeymFhmbSIXjY8gvrlxp92c9%0AuiwWmHC2pvk4J341cyCxhzSgIJGuyqjAKrzdl0rUgIp95UnGeryDJDCBFKPe%0AvsPzgwzgDKrqdSNiEZPKaV3N&1=1>,<mailto:4_n1o51hh0igp8l83k33qlgeethamfn4bg4krzwlin5mupkft1l3o5ax@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44aty57pad5ey8qamlvxuvohbun5z0cb0z2tojf3x9ww38scqtbgma0lvtq8kzz11n1oa6bc4rimp6wz05yf6ho5ccv4391ih13kh9-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24y50sI2r1ay9MLBs3JCg7Gw%3D%3D%24HiBS0t66Dm%2BkSZYydWb6daEIBM6V0S5T2W4eEHyQxnFWAejHz8s6z0pK46go%0ALS5YISeSKQZjazIiwBjqrHQOZVJOYPzbKPwxywrxuSi57X9M8sdmZofcYRDN%0AYacDcKTGq2Uh8R1H2WhCgqcyPcnFR4uCvVFsP7mmEHnotUr27T9tNp0JiTk8%0AL6AFo47EXfAkThpZIXQ2rAXrKXT68SW0es3dcfeHpnJLB71AdQCeqKWBbLmj%0AEH1OdFdjmGIaOVFIBM5Rv5CJ6OZGjPHBeS1FIkFLYSxRB0HmyZnMrgYoyA8l%0ARE97QTubJVp4eNyJDrBT&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaeenrzsgx4e45zxsto2sz5xdb35wv9fv21@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449xsn6y26ll1qruhi4qyl0idaslr7zfqze8323s0gr7cijv1p4i99ylvq0stn8rv7t6k84ypwfosm80b2wtkvgeuz0brvke0m6mwd-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24Ei45xP5ZfZqnTP8EJaDSzg%3D%3D%24RQ32Z5raKFCC%2B6chQpbjhzuDFi2c5RtVqH5aUraQ7sMMfIl6rUHu%2FIzRz%2B5C%0AJST12CMunhnHH0WtNpVGkGO1eVWvrQ314qG4ZcnhyM%2FgWYpLBU%2FkILttAbzP%0AZcNQUqmwjSg18A0bs7fYeV2Z%2F%2F73d7sSHml49zImwZKdxr7%2B%2FWFaqAYIKqFm%0AkKaVaok6qDg86KLeDfG33FHUXCsbDMqzhj43CSSd3KXBpiHoxUwIXw6ddBCC%0AO8fhZGVQNRl5ugnM8omRqW2%2FsnVV9%2FPf8LuODY6Yo%2BSzDH%2FlRFcbN2Tt2sXZ%0AnlWkrFxhYr3TO%2FOHKoaNGm1oWt8SQCszBwxOv0LcEOroXa81ZFJkgFEL02m6%0AnRjcr%2Fz2TXSiiNdRGJJUqZDi&1=1>,<mailto:4_n1o51hh0igp8l83k33qlgeetd38hr8tklydo59tso9vuzuczgm9gie@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449xo0pa96d9lrwl4kszpj6bmdcj2p3t8easqco2r802z9icbuwpmj0umtvgg8fknj2b0qgltez7myh19xgyrxlbwg8ja26xc1zwbx-DO_NOT_DELETE>",
      },
      {
        from: "Freeletics <instructors@email.freeletics.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%24WOINDs8Ou435Uq5qBQ04vw%3D%3D%24PUUDTvNTIuQSfriaugYJQlir26B5MMth2RT13ab2EET0hRU189EENH%2FcQJxy%0AH425U0Cqqbw41x11opjgoCwkPgJQSaHoNHg1bTtFGRmKMxX8c5kXwkObFCC7%0AUwLKSX3Q1wraQiNSktUUWUqsFK%2FtYtmE0Xpa43tdPBOZly990nnJv8SYu51U%0AQ19rcBMqACWko4Sf%2BQwc14NCm93czbfbQ0%2BESm%2FnOu6us3aO0tnIXZmhA9in%0A4IG9MesUUuA5JAE%2BcT30URXOkvm72YfprpS5MOR%2BSjBcIn8cUvXIrvy4Z88A%0ARDecnYEILfwqH6fMmwW4oT3R7SPqXxBJm0tz0xoui1ItPBBnweJbf0UeXVLg%0AmD0erD2NWFV6AHihGihsU3Q%2B&1=1>,<mailto:4_n1o51hh0igp8l83k33qlgeet4oglzkgssal1685u68z5arc75lsp64@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449xbgx6j905o1b53f20uopcaj2eni1837ptzpjd712khw37ohtw7kpyeekl2poivvtm8b3r9urrtne58eme2e4nlr5fimzoxshgtp-DO_NOT_DELETE>",
      },
    ],
    companyName: "freeletics",
    companyLogo: "https://logo.clearbit.com/freeletics.com",
    unsubscribeLink:
      "<https://01.emailinboundprocessing.eu/enc_user/list_unsubscribe?d=%241%2475Q6ernetqlgVzARAj8fOA%3D%3D%24pn2f4hptOLVHHL9iK%2Bj1FlhXsSjuXRPo0HYmMc%2B6sWk9WgBfPdv1d7qklY7V%0AG2TToQOK1HAcBWhv5mNIiNVHAVOhYfxUlntC1c2AfJotzWbpLCjwud042DVy%0AdeBf0vEnuvMUGCIlVN0gQP5syY45jUtCxW%2FwAT2o7jYWI%2F0ucaZv3KC1mvbf%0ARVSsNOsM28cShbuXVr1kMjykXmmlchwkbQIoLGohMnT6gxaiDKIK20jQKp2W%0AHen90vutyf%2FKHb0fdne%2BM4gKeuxJIzl%2FtgYv%2BXGOYgzS8PSUhBaXAwa0oN%2Bs%0A9G%2FaxRChfi8JYQqOS89u5nNWdCIUBdNzc%2FDbkMkVOQ%3D%3D&1=1>,<mailto:4_n1o51hh0igp8l83k33qkaefklnlyk1j19qyx8pgyx5xs2f6omluivo@unsubscribe.emailinboundprocessing.eu?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44b2ch2c9st80ra6x825vjzthwhwe2bvhrjzwj20eug8ymdgslehzd699ld9r4z6ps1jznfg8z6lez2031pux2r616w9o669kt62jx-DO_NOT_DELETE>",
    emailId: "instructors@email.freeletics.com",
  },
  {
    emails: [
      {
        from: "Dribbble <no-reply@n.dribbble.com>",
        unsubscribeLink:
          "<https://dribbble.com/businesswithtanish/unsubscribe/education/fdd553ccf550077ea9b81f57540575db5867f5aadab1a0eae93edba4255eb96b>",
      },
    ],
    companyName: "dribbble",
    companyLogo: "https://logo.clearbit.com/dribbble.com",
    unsubscribeLink:
      "<https://dribbble.com/businesswithtanish/unsubscribe/education/fdd553ccf550077ea9b81f57540575db5867f5aadab1a0eae93edba4255eb96b>",
    emailId: "no-reply@n.dribbble.com",
  },
  {
    emails: [
      {
        from: "Amanda at DataCamp <team@datacamp.com>",
        unsubscribeLink: "",
      },
    ],
    companyName: "datacamp",
    companyLogo: "https://logo.clearbit.com/datacamp.com",
    unsubscribeLink: "",
    emailId: "team@datacamp.com",
  },
  {
    emails: [
      {
        from: "Tripadvisor <savings@mp1.tripadvisor.com>",
        unsubscribeLink:
          "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%24d4GTMmwhtaZopXgGMh6UBg%3D%3D%24ktv6IzRDLLOVO6rvV8Q%2Fohp5OZ3i2kCcHCTJjt5CQjyLliFrNXzai%2BoNRw7M%0A4R9NJYxQO15ypb9NYIcwPgA%2BT9iXH8SNob%2FlErhZw18OHov3ublDFVYXcLyC%0AGWPpvSrZyceW4R3Zuws3y7gt6VX5XDHAKZxsgjyFBtlVvKv3hYKNNVTLlHPe%0AZp85cjVUZX3v1C3VV1GmJR5PEYcHzu9w96R1i3FNXafhcY%2BBxQ5MBr%2FLFv3N%0A4vtjOKQeewyW6nG6Pif5WW02ayVIgPRYSZKE5s4qLLmlvuKajR8t2XDBCSmY%0AaktHc8kO3pZDVnm91Bylu07TKNRW4n4xfYg3wAkSEQ%3D%3D&1=1>,<mailto:4_p3xytdxj0kxgiq52qzm2n3xkofijmzc1davglx1v7lwwxz2sc6ojkp@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44b26q5b8kz1b9xb56102gadhnkxngyqve7tn2teh9o6o5urzq8mwejd0di40w3hdxtw4unybkuyexnkomv6au8wwjwqk6t7kjffjh-DO_NOT_DELETE>",
      },
      {
        from: "Tripadvisor <awards@mp1.tripadvisor.com>",
        unsubscribeLink:
          "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%24q7HuCNKeAq%2F%2FldFjigsMAQ%3D%3D%24JZMl0rTfM%2F615nlp6a1naTtezBCXfnyhehKPV6c%2BYJJXRcIuQk8oZo1HhcYW%0A%2FFw0ZfM3l8VNABdN6GHLU72KOAYTaRhAZ8ED21SPtEn%2FN7EyngcBGXnDc9dz%0AspbI4WM2nxXEJKp6z83OBb2lWs4IaAUHQ83HrMC4SGofsSyfdO6wMHJbq1vP%0ARC26Y79dGHmfevhCsS816lxiAke787lT2dthYhPChJI0Ur5HWyhltbEfFt0q%0A90frJxZYkuZQ6kvDF8c3s%2Fx1so3FNon7ZV2F4aLWy%2BvG71w8MAdlwWLd%2BUf0%0AcobmZek14r2ul5SnhOJ0%2FuGYjMIzhxqeyWGSbWuCTZnoYZxQxyJX2nV9NmeW%0AhP6Z6C8K%2FfXncRDejHHB5m4e&1=1>,<mailto:4_p8vifhi13pz0914lfqv6h9kdrtu2g8a3acx3y3rd4xi5gvtykr80yy@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44av6tr4c7k6dhpj0hoqxbcie41g47not0joli40t5ch15atm8y4aru03h9hwhh726swv5cj03rufx5z1dlm2qedv83u7jssk6o0od-DO_NOT_DELETE>",
      },
      {
        from: "Tripadvisor <inspiration@mp1.tripadvisor.com>",
        unsubscribeLink:
          "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%249dfWnZzRun1T7g21RRz5yA%3D%3D%2404yMkEm26E%2Fp4AqAMH%2Fo1jyBzv0N1FbDsZlE9JfXrSmE3xbmCNcaCAkDMriE%0AGPYiKYoaXsNufkXZuLlWi3dHoC2Tg2R08oE0ddRTH9TnZ8Kt82%2FsDEobRui%2B%0Agbmft791hQcQ%2BrA990Knw7Q%2FwmcGNE4MQbVJ%2Fn1nLVqdyRHb9pSLAjIwywPk%0AwvB3GZ2to%2FEW1T3BAYu50uZGn5HkOCKqwa0sVrizN4FhuwJOJfn3s0yjwlun%0AxGe5tJdT8KVIgB0iprpOFGCDPa2M3DGCWkp%2B1Z8rJ5kLccAOVEkBhzOUKVev%0AVSrlaaeIEIZhS8lWZLwtk2zcUkp8leuul1mXuRGytPuCuwA6eYk%2FeA%2B%2BGC%2B6%0AjiLZxM6Mu%2FCIm9F8mUnHxWa4&1=1>,<mailto:4_p8vifhi13pz0914lfqv6h9kdjf26omms61n9ws55u3mforz4no704h@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449xha85u9vydsf7le0kliwe4aip5i3rfu2wkwf0xwwbm6m02a4a21iqxrfjisar2rczahabdthkpclq20l7qf2u3lu6lhizgia2y5-DO_NOT_DELETE>",
      },
      {
        from: "Tripadvisor <inspiration@mp1.tripadvisor.com>",
        unsubscribeLink:
          "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%24BmuVITbzZmeVEFW%2FbbjPSA%3D%3D%24zN8WBSlkTM7XcVNY64yUPZ4H%2FZm27o0iRPDQbaf1B8wK3kURqTalQldR5SMK%0Am1D4yL606y8flnk1HN%2BdMy84RC3PqZR%2F%2FX4xDmOdm7jCydFbb1LZjipoB6rW%0AZelAxYn%2FdPM06Apuvd3oxj6UD009izPrn%2FuswyKY%2BGl2g1j7rHEQoRq6zGk0%0AXr51ULkRKhRtnE4BcCuCHpfqrgGuguBR%2F%2BY2Dxr3XWY8rBrAgZYGMznXCzdy%0A0Dt%2FcV7dHL6ZLdgK9DNW1TWwkMjB8%2F1%2F%2B637cqV8rNUP9fEw0BMYbHz33KS7%0AUejx0OZ06l8zY0hXnwX0&1=1>,<mailto:4_p3xytdxj0kxgiq52qzm2n3wxs70rtf1ma5y72tl9149w6fv2zujmij@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449xh5et62lnrwe7ql6woy3n79u64v8708qxhyh0m727mh6n8rvhyn5goecg21pnvdjh0dmtkfxy4p493ljum0fvvd8kq62fs14til-DO_NOT_DELETE>",
      },
      {
        from: "Tripadvisor <awards@mp1.tripadvisor.com>",
        unsubscribeLink:
          "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%24NsoyuGaioQRYFyXAHbkLSw%3D%3D%24u6Ry79HFpmikYRfyTQbBVAXaUivnri8Bf4AvGiCb%2FdWmewgzwogALsTuDrA8%0Aq%2FrKYm%2F2kPvVIIlm6dqrCqQwotapreKEpMBKzAPEALIC%2BB2yp%2FztLn%2BDx5kN%0Aof3VBdYahVD6uugQVdFKb3FVMOTsPx1%2BBedOpvW3BlJ4rVsFh0qEeIqBWI3K%0AAWdVoMgau2B3kyNDV61PZodze8lesjI6A1ZF0HSnGmBjfLQXF5X9NkzcGB4T%0AocGVSc5NrrbtahuMcj5XKXlhGtg5L51rnyOomo8i1I%2F2F74VvXEYnB%2FMnwSl%0AN64838KSLb%2FCYTEO2jqU&1=1>,<mailto:4_p3xytdxj0kxgiq52qzm2n3wsvlxtg6rghbk7d8zb8pecym22z2b2o5@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e449x6u9b5k4nreu4p3608d2qxf48p54xq78kt1l246946s8apamll9l7637bxe06uzlhpbuv5yklkz10o9ft8opn8rnojiqfxlx7xp-DO_NOT_DELETE>",
      },
    ],
    companyName: "tripadvisor",
    companyLogo: "https://logo.clearbit.com/tripadvisor.com",
    unsubscribeLink:
      "<https://05.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%24d4GTMmwhtaZopXgGMh6UBg%3D%3D%24ktv6IzRDLLOVO6rvV8Q%2Fohp5OZ3i2kCcHCTJjt5CQjyLliFrNXzai%2BoNRw7M%0A4R9NJYxQO15ypb9NYIcwPgA%2BT9iXH8SNob%2FlErhZw18OHov3ublDFVYXcLyC%0AGWPpvSrZyceW4R3Zuws3y7gt6VX5XDHAKZxsgjyFBtlVvKv3hYKNNVTLlHPe%0AZp85cjVUZX3v1C3VV1GmJR5PEYcHzu9w96R1i3FNXafhcY%2BBxQ5MBr%2FLFv3N%0A4vtjOKQeewyW6nG6Pif5WW02ayVIgPRYSZKE5s4qLLmlvuKajR8t2XDBCSmY%0AaktHc8kO3pZDVnm91Bylu07TKNRW4n4xfYg3wAkSEQ%3D%3D&1=1>,<mailto:4_p3xytdxj0kxgiq52qzm2n3xkofijmzc1davglx1v7lwwxz2sc6ojkp@unsubscribe-05.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44b26q5b8kz1b9xb56102gadhnkxngyqve7tn2teh9o6o5urzq8mwejd0di40w3hdxtw4unybkuyexnkomv6au8wwjwqk6t7kjffjh-DO_NOT_DELETE>",
    emailId: "savings@mp1.tripadvisor.com",
  },
  {
    emails: [
      {
        from: "BookMyShow <no-reply@entertainment.bookmyshow.com>",
        unsubscribeLink:
          "<http://bmshosting.in/unsubscribe/index.php?EmailId=businesswithtanishgarg@gmail.com&msgid=252302058&msgname=MV_FuriosaAMadMaxSaga_Exclusive_OldFormat_RestDB_PanIndia_English_22052024>",
      },
      {
        from: "BookMyShow <no-reply@entertainment.bookmyshow.com>",
        unsubscribeLink:
          "<http://bmshosting.in/unsubscribe/index.php?EmailId=businesswithtanishgarg@gmail.com&msgid=252300761&msgname=MV_KingdomofthePlanetoftheApes_Exclusive_OldFormat_RestDB_PanIndia_English_09052024>",
      },
    ],
    companyName: "bookmyshow",
    companyLogo: "https://logo.clearbit.com/bookmyshow.com",
    unsubscribeLink:
      "<http://bmshosting.in/unsubscribe/index.php?EmailId=businesswithtanishgarg@gmail.com&msgid=252302058&msgname=MV_FuriosaAMadMaxSaga_Exclusive_OldFormat_RestDB_PanIndia_English_22052024>",
    emailId: "no-reply@entertainment.bookmyshow.com",
  },
  {
    emails: [
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:WfXXiPpAz7EuMlAcPS6DQ3yka2MQQvqg4d4njIaFdw0~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJtZXNzYWdlX2lkIjogIjY2NDZmNzUyNGM2NjAyMGEyYjcyIiwgInN1YmFjY291bnRfaWQiOiAiNDEiIH0~>,<https://unsubscribe.spmta.com/u/tRvIgSthxgYPc2W5HBodPQ~~/AASgtwA~/RgRoLtf3PFcDc3BjQgpmRvdSTGYCCityUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:Rmfx-d2BmJrA2DIKZPLoyRbA-doPN2ahWjMOQAsvKhY~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJtZXNzYWdlX2lkIjogIjY2NDZlMmFjNDk2NjA1MDA3ZjVmIiwgInN1YmFjY291bnRfaWQiOiAiNDEiIH0~>,<https://unsubscribe.spmta.com/u/TzhXJWiZF2HyVMNpvVXGWg~~/AASgtwA~/RgRoLDHiPFcDc3BjQgpmRuKsSWYFAH9fUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:nhwmIS7KY8K6DxgKCtBOaTfvdCVMO7KQgPEwnOCht6w~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJzdWJhY2NvdW50X2lkIjogIjQxIiwgIm1lc3NhZ2VfaWQiOiAiNjY0M2FiYWM0NTY2OWUzYjFlM2MiIH0~>,<https://unsubscribe.spmta.com/u/vSWPpFy7Y43cQnGtecFlaA~~/AASgtwA~/RgRoKDGrPFcDc3BjQgpmQ6usRWaeOx48UiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:NPX3dJjlukKW_bQKzYwdpPDZ6dsjkl5cqEl_tdPQ3XM~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJtZXNzYWdlX2lkIjogIjY2M2RmMGZiNDI2NjMzOWM0ZDU2IiwgInN1YmFjY291bnRfaWQiOiAiNDEiIH0~>,<https://unsubscribe.spmta.com/u/lESbmYmhbX6NoFWZbLcPpg~~/AASgtwA~/RgRoJYDwPFcDc3BjQgpmPfD7QmYznE1WUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:k8Rx-6Q2uNUavF95uHVmQdMuoeDGloi0bU7Gj5fV0ek~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJzdWJhY2NvdW50X2lkIjogIjQxIiwgIm1lc3NhZ2VfaWQiOiAiNjYzZGQxMDYzZjY2MjE5MDJhMDgiIH0~>,<https://unsubscribe.spmta.com/u/E-QNXlsxZwQzZgiKon2gbw~~/AASgtwA~/RgRoIYvRPFcDc3BjQgpmPdEGP2YhkCoIUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
      {
        from: "Team Razorpay <noreply@razorpay.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:oBC0m0tjlLq1OwczAUat2P29IQgqZhaGkwYg-dNG1B8~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJtZXNzYWdlX2lkIjogIjY2MzM1NDY3M2M2Njk0MjcwZjg5IiwgInN1YmFjY291bnRfaWQiOiAiNDEiIH0~>,<https://unsubscribe.spmta.com/u/96m3Fm-eHGLpeAP-2weMGg~~/AASgtwA~/RgRoHuxUPFcDc3BjQgpmM1RnPGaUJw-JUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
      },
    ],
    companyName: "razorpay",
    companyLogo: "https://logo.clearbit.com/razorpay.com",
    unsubscribeLink:
      "<mailto:unsubscribe@unsub.spmta.com?subject=unsubscribe:WfXXiPpAz7EuMlAcPS6DQ3yka2MQQvqg4d4njIaFdw0~|eyAicmNwdF90byI6ICJidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbSIsICJ0ZW5hbnRfaWQiOiAic3BjIiwgImN1c3RvbWVyX2lkIjogIjMwMzI4NyIsICJtZXNzYWdlX2lkIjogIjY2NDZmNzUyNGM2NjAyMGEyYjcyIiwgInN1YmFjY291bnRfaWQiOiAiNDEiIH0~>,<https://unsubscribe.spmta.com/u/tRvIgSthxgYPc2W5HBodPQ~~/AASgtwA~/RgRoLtf3PFcDc3BjQgpmRvdSTGYCCityUiBidXNpbmVzc3dpdGh0YW5pc2hnYXJnQGdtYWlsLmNvbVgEAAAAKQ~~>",
    emailId: "noreply@razorpay.com",
  },
  {
    emails: [
      {
        from: '"Bhargava @Notion Press" <publish@notionpress.com>',
        unsubscribeLink:
          "<mailto:32.MRTVGUDKKFCUIQKOMV4EWOLBPBFXOR2QNVSGOQ3FNV3GIMSWJJPUON3ZOFWWONB5@unsubscribe2.customer.io>, <https://e.customeriomail.com/unsubscribe/dgSPjQEDANexK9axKwGPmdgCemvd2VJ_G7yqmg4=>",
      },
      {
        from: '"Bhargava @Notion Press" <publish@notionpress.com>',
        unsubscribeLink:
          "<mailto:32.MRTVGUDKKFCUIQKOMV4EWOLBPBFXOR2QMRRECSDKORMGGUCMIRFVKVSYOAYWYUJ5@unsubscribe2.customer.io>, <https://e.customeriomail.com/unsubscribe/dgSPjQEDANexK9axKwGPdbAHjtXcPLDKUVXp1lQ=>",
      },
    ],
    companyName: "notionpress",
    companyLogo: "https://logo.clearbit.com/notionpress.com",
    unsubscribeLink:
      "<mailto:32.MRTVGUDKKFCUIQKOMV4EWOLBPBFXOR2QNVSGOQ3FNV3GIMSWJJPUON3ZOFWWONB5@unsubscribe2.customer.io>, <https://e.customeriomail.com/unsubscribe/dgSPjQEDANexK9axKwGPmdgCemvd2VJ_G7yqmg4=>",
    emailId: "publish@notionpress.com",
  },
  {
    emails: [
      {
        from: "Backblaze for Business <newsletter@backblaze.com>",
        unsubscribeLink:
          "<mailto:1axdjapcui9rhax48yefratv4giebortph1ixd@mktg.backblaze.com?subject=unsubscribe>, <https://hub.backblaze.com/subscription-preferences/v2/unsubscribe-all?data=W2nXS-N30h-B9W2zz75j4r6HYvW23ncnp2t4b3-W45RM4g30bZn4W2PM6qr4mBH3fW2Mv5qb3SSLZFW1X7kjm45nYVSW3y-m_32sT_KBW2nHZD63BLJ59W4htj6s3Vz2NwW2Hytl83_TvzkW2p7stp3zhRr0W2x_H3g1W_MGbW1-YVYv43F6PDW1SzDyZ2572lGW4mKfCG2zWRlMW4mvz6T47KFYCW2nVQ-R1XdhxDW2vHLtg4p9PQ_W4cqrKS4mtjDkW2Wzm_P2WhRr1W2sNvsH2PMBK5W38sP0t3NGfjfW2RT57J3ZPCp2W30KVKX3T4FpTW4kCHdT2nGJRLW3NLvYM3SZBXKW2r1xxc32hmsSW3ZGtDy3_C1SlW30ly531LzjnwW24RSdX2zK04TW3dqj-k3hZkl2W3_v7GX3gg6l0W1SsNg13ZDW0hW2zXdGN41TnH3W4hpCpH23bbBlW2YJHwr4fKYffW4hGPWV2r91glW2CGgl02-F554W3ZG6jp3gpDjfW4cL3Ry1Y-lxpW2KRHfD2KBSChW2CLXx32sB9pQW30G-B-3SXSQLW3T54LC3Y0QLjW3BNNG13C2H4dW2TkB9l3P2XnBf3JKHWf04>",
      },
    ],
    companyName: "backblaze",
    companyLogo: "https://logo.clearbit.com/backblaze.com",
    unsubscribeLink:
      "<mailto:1axdjapcui9rhax48yefratv4giebortph1ixd@mktg.backblaze.com?subject=unsubscribe>, <https://hub.backblaze.com/subscription-preferences/v2/unsubscribe-all?data=W2nXS-N30h-B9W2zz75j4r6HYvW23ncnp2t4b3-W45RM4g30bZn4W2PM6qr4mBH3fW2Mv5qb3SSLZFW1X7kjm45nYVSW3y-m_32sT_KBW2nHZD63BLJ59W4htj6s3Vz2NwW2Hytl83_TvzkW2p7stp3zhRr0W2x_H3g1W_MGbW1-YVYv43F6PDW1SzDyZ2572lGW4mKfCG2zWRlMW4mvz6T47KFYCW2nVQ-R1XdhxDW2vHLtg4p9PQ_W4cqrKS4mtjDkW2Wzm_P2WhRr1W2sNvsH2PMBK5W38sP0t3NGfjfW2RT57J3ZPCp2W30KVKX3T4FpTW4kCHdT2nGJRLW3NLvYM3SZBXKW2r1xxc32hmsSW3ZGtDy3_C1SlW30ly531LzjnwW24RSdX2zK04TW3dqj-k3hZkl2W3_v7GX3gg6l0W1SsNg13ZDW0hW2zXdGN41TnH3W4hpCpH23bbBlW2YJHwr4fKYffW4hGPWV2r91glW2CGgl02-F554W3ZG6jp3gpDjfW4cL3Ry1Y-lxpW2KRHfD2KBSChW2CLXx32sB9pQW30G-B-3SXSQLW3T54LC3Y0QLjW3BNNG13C2H4dW2TkB9l3P2XnBf3JKHWf04>",
    emailId: "newsletter@backblaze.com",
  },
  {
    emails: [
      {
        from: "MongoDB <mongodb@team.mongodb.com>",
        unsubscribeLink:
          "<https://links.iterable.com/e/eh?_t=86ba93b39a0e415ea7cd8e8ed81051cd&_m=2023deee5c644dfb81a0dcf8722ace83&_e=FMt1BzPDUWW4evmojamE7XeGhidYOGqnbTX_wATJbimjqDgvP5jRTdyrxKRncrwB4OFGTeBp5EbiYdjDsgyzz4uE9AQeMx-Ggb3K4pLYN3SgKSFrHEnjah1eL7syD6QudYuqwr7MqXuQGBtNIGGQY8uLUf9EpekoBPOzdFnSmJH7T8mR4VNjgEbmaHU9kgTz>,<mailto:unsubscribe+8844937+11708625@unsubscribe.iterable.com>",
      },
      {
        from: "MongoDB <mongodb@team.mongodb.com>",
        unsubscribeLink:
          "<https://links.iterable.com/e/eh?_t=86ba93b39a0e415ea7cd8e8ed81051cd&_m=199f44b442484938a4d5309549fe8638&_e=OfxyVJwcseDf2pOA5ROZCD9cnzH4O5sDPLV1V2Iukf6MSM4YO7MM8JjfrSf6NutYjv1EACmBXSZKtjQOsf-Cxrswekt2Ri_YFSln8GsGGB9Cc3YDcC2zCHBpXzDKBzHJ5X6pu6e-5Tn92kqekaFGfWPD_0EOUtDpeNEqtE0MIfti2Hipw5J5FNTzsJ7-Imt8>,<mailto:unsubscribe+7715097+11786096@unsubscribe.iterable.com>",
      },
    ],
    companyName: "mongodb",
    companyLogo: "https://logo.clearbit.com/mongodb.com",
    unsubscribeLink:
      "<https://links.iterable.com/e/eh?_t=86ba93b39a0e415ea7cd8e8ed81051cd&_m=2023deee5c644dfb81a0dcf8722ace83&_e=FMt1BzPDUWW4evmojamE7XeGhidYOGqnbTX_wATJbimjqDgvP5jRTdyrxKRncrwB4OFGTeBp5EbiYdjDsgyzz4uE9AQeMx-Ggb3K4pLYN3SgKSFrHEnjah1eL7syD6QudYuqwr7MqXuQGBtNIGGQY8uLUf9EpekoBPOzdFnSmJH7T8mR4VNjgEbmaHU9kgTz>,<mailto:unsubscribe+8844937+11708625@unsubscribe.iterable.com>",
    emailId: "mongodb@team.mongodb.com",
  },
  {
    emails: [
      {
        from: "Ghost Resources <hello@ghost.org>",
        unsubscribeLink:
          "<https://ghost.org/resources/unsubscribe/?uuid=0777d0ed-6435-4362-abdc-517ef50fc9d1&newsletter=19355208-014f-410e-ab5c-800289cc1ead>, <mailto:u+mq6tkmzsgnrgcjtfnvqws3bnnfsd2nrwgq4wgzdehftdcyzwme4tambqge3gemjzg5qsm2b5gjstcmzzgrrtgolemftdanbxgm2wemtgga2tcytfmnrgmnjqmrssm2j5giydenbqguytsmjqgaytcmzog44gkzbxmm4damtdgbrwkojzgastimdhnbxxg5bom5ug643ufzxxezzgoi6we5ltnfxgk43to5uxi2dumfxgs43im5qxezzfgqygo3lbnfwc4y3pnuthiplcnrxwoljxhe2dsmzsez2d2ytvnrvs2zlnmfuwyjtuhvtwq33toqwwk3lbnfwa@ghost.ghost.org>",
      },
    ],
    companyName: "ghost",
    companyLogo: "https://logo.clearbit.com/ghost.org",
    unsubscribeLink:
      "<https://ghost.org/resources/unsubscribe/?uuid=0777d0ed-6435-4362-abdc-517ef50fc9d1&newsletter=19355208-014f-410e-ab5c-800289cc1ead>, <mailto:u+mq6tkmzsgnrgcjtfnvqws3bnnfsd2nrwgq4wgzdehftdcyzwme4tambqge3gemjzg5qsm2b5gjstcmzzgrrtgolemftdanbxgm2wemtgga2tcytfmnrgmnjqmrssm2j5giydenbqguytsmjqgaytcmzog44gkzbxmm4damtdgbrwkojzgastimdhnbxxg5bom5ug643ufzxxezzgoi6we5ltnfxgk43to5uxi2dumfxgs43im5qxezzfgqygo3lbnfwc4y3pnuthiplcnrxwoljxhe2dsmzsez2d2ytvnrvs2zlnmfuwyjtuhvtwq33toqwwk3lbnfwa@ghost.ghost.org>",
    emailId: "hello@ghost.org",
  },
  {
    emails: [
      {
        from: "DAZN <news@mail.dazn.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@em.mail.dazn.com?subject=https://link.mail.dazn.com/wf/unsubscribe*q*upn=hqJoGkZGK-2Btpx0N4PlW8WibiBa7CNeDJyAo-2FeJwdqQMfznXHvrLeCZ1MKlc4TxL7fTqdghHWn5hWI6Z5mHAeMpTwF6MEj7IOoVmEMZ7juA7FEGXTL7jvkXXqwbRYBGnUzF9OS6uonpxcuL18ViCQ4NsfAiwBqSUrp87ld0RDcMzUv6Ur8nYrQKZf05rKlCEkvZSVTQ93R5N61TEVITkIhWPu6wbht4GRkEo-2BenisLlQ1U1bv0No6ZrxdaXINrEBkTxKjj-2FK04xNtsUjjA3mStqtUqhFLDgAiCHusGPHGti8JBM6xCB0wqY27Byj-2F9paulQI3VrTD7i9FH46TlR3etNuz8HHdntRvfHxFX8O0rVsrwjEOrSCJ7TDfP6eUd7nnokXS9pVI9vUgCIWE1kb1jYx-2BZ5NP2NZ71RW-2FoWuHo9Qj-2BcCRiduVciB1Qo5W-2BEMpY0-2BBDB9HXLKyCzrCRTOudK-2FEf2BXEgi4FsxtcFCzUOkrQDWcpMvFGH1TVXvw8jTn-2FvQFnjJWnrEXlSic75zMMjxzQW6tWB8rR-2FGseDRB00xVmz1jeSfl4NHxYbEawLzJUF5-2BD-2Fh-2B95EMAmCEzYLDeICjCylid-2FynB13-2BB5aG8uHRuyTosVIKBF8ZS4mh067UAv8tucMiRqDRZIGFnXTcjbS5ktkMXduW2BlpjcJNZDxGa6V5c9K4-2BQpjGTcOkgRja3NfTL5kwMZzzZTINyz04Iki80FeVU0YB-2FJuBU2INmzLvzBnt9Y-2Fxz0DrTjnnciIckpuRwEaPpiqh0UFBvjPGpP7gcMmH4U498qEPW6VEYTKZ-2BA3aH5Wj3mFxjdz0zCQcIwF1FVOyuf8bIfF0b6fR4hjULFNhkCnEwHe-2FGoZUd4-3D>,<https://link.mail.dazn.com/lu/unsubscribe?oc=u001.PzNMIOq34d6v4rmeBwA4FhorijISJhdIVaOOiEEIlCS_ZHq0NUJmSnRJzQvEyp8OgGqO4PeUiF9KTW8IH7vjwdB6tdmO4NSuj7uxNlIiqNVE6O6-c9lTglyBbU4XiWtnRo4biQvVUiPAjFRTx_dMska7cZvo2n5wVx6vsw9buopgLeWV6JCTWVBWywPSE1Xj4Pj_XrAv8vCDTnr5j-pjdoMuPT_QvBwPXPbpF1qyZv82enX4wiVcLxsdRHJsNWGpNDVZorVlmn-ovx95RY0qooFXWvzQghQIk36DzJvt6A4nMzwc04i6iN_TxdHw-lRnmdhaxyCB1JU4WR_r2VDCe7IiuX0HrmhtJftTCKEPfHbVA4v4ediIUW1TNoD2YZ0bM1XRvLetOFx9YRRJI2uZUkMxjEtvIEuZ6OJy58LvbrNchnjvHnnnGZCgcbs7OrR_u9rgtKpM6ATdce_ldJSJ2fYtFasspuSW59rPz0f23QT7tEmxmY2ASxy2XFXIBlWEBfUlcNV5az6ZA8es7KkJ3aZoPChMeFZ0haU26129Ip_nJe4c0pW040JLurrBKT9Xq9_riE9aAQ4TYqcN6Kg7dgzoPhpU7dTOmkbTjArpbIwVFFTCnnvPAML5T6uug4uAJepWIbsFjiWoJAQu2qAIVpaXd3bCZDCaIFYqOW_00Ie8GaoZTG_AdYuSwWTT9b1ijUigOIqKeEuEv3ROIocPWrLZcyrlYI4yiLflwvr7wId0birHOd77kYQTmPDsPLedhzIttCYacNFZNlTCj8Rm7CIUQJ5bU7YTede0BNua0CVkTDbfjNyg2ccWaEaGArQDYzrM0JQJvG3YBowDzIXFgnVWE3bpHN-26WhYG-hQpxl79uzypg4BHitYO2VdahmZ2hXgLXAxWkybA7JRI3AssKPD4h_aTfw4qdC2KN4R2VBYS9FlGvFbOAqzmuQQIJjyt2CvWszFUOdVfz-rvrLes_ndYXH-5ef69u4hBusbjQzng5Z9meJzQmLbWiNp8pF05j0bR4bPCJXdmZ1QDG6HEkm-qoimebfmIT_xjGd_ZfYM35iAFJ6N1BpbkMKYYI1eznJejMDNkxTMlJB74I9kJ__9ehHqvOHiCErzgXkMuE1G025bOip0c8kP41bWdTwvuW1_z8D5qp4m91-qvo0Djt2ezZugU-8WurWTLlCni0GTdMoWgO88tw5ijwkpAcVQPk6WGcGmzyf_-_4DY5gN0zF1WhZqJbaVmr0cbXDcuGGi3SRlEw0oFQuNSeS5a37my6F3ugfTarUevSJV0UPfhYpThAB15F-z-oSou5meVTk>",
      },
      {
        from: "DAZN <news@mail.dazn.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@em.mail.dazn.com?subject=https://link.mail.dazn.com/wf/unsubscribe*q*upn=hqJoGkZGK-2Btpx0N4PlW8WibiBa7CNeDJyAo-2FeJwdqQMfznXHvrLeCZ1MKlc4TxL7fTqdghHWn5hWI6Z5mHAeMpTwF6MEj7IOoVmEMZ7juA4HtjDohRtJTB3TtptqsIEKYe8nhkGDLiURSRKahTyWiAqAFfHf9vDgxLJB-2FfczhD-2BJguXsGFGlrsADQVwRw8OEPV5Ip2TYvqtZaHAIrg9KsnVafPxG5C1FqR-2BFf3UxhgIYFVjZWhQJ3EimcNY8OT5cBrbFElbXTGoF3VoDgXpHu6Bmb95WKnF1Pm8NgeOKyoemigIQpNyCNIl8JV-2FXGA0dP0AQ4hWev3Rvd-2B33yBdLA6WtlSJJqUGapOH1-2Br97zfp2wRrpgtFfVajQMaWP5fIuMDmeTqrbeGSHcYYpoD0bOZXCBIR0sdxa-2Fynx3osC5zdLDS4BxoXRamr1Xl9Zi-2F-2Bpr3Mda52MB54c2s1GDwlnlwiyBgO8QMLBZ-2F6zXV4aUVYNRZpaGNBRB9ibM37iSNrwjIoG9LYyqK8k-2F9p0odEm2vSeAFLEbpgrDqPKGunonWcznTfAuENvz5fY0gyklbMiVxWqBIj-2BGHVUe28DrYS35rQY4kgL73XzjoyVcWr-2BfZzlubTqW4LfEmKwADDBGCmRDb-2BKvLhijCP0W-2BUlS52NVV3i2OytLLFRuxyQQhMD0s9jsLu-2B2vTy8pxeN2LYqgcmoibXChQl09-2BuzCtOzJzrnJFkLtDwXXE2TuFSdosOQz7lJYpcRPbpOTNVRDXq3SYFOgQjWlrg-2FdS2AFBs-2Bzw5clk5XKphux8LdlJqyuNfpHt-2FAQ1p5TrVjqWA-2FWCgP8nub-2B-2BQhfPx6sosLfeF35ShUHewGg-2B13pj7qHWiHkvnJhA-3D>,<https://link.mail.dazn.com/lu/unsubscribe?oc=u001.PzNMIOq34d6v4rmeBwA4FhorijISJhdIVaOOiEEIlCS_ZHq0NUJmSnRJzQvEyp8OgGqO4PeUiF9KTW8IH7vjwdB6tdmO4NSuj7uxNlIiqNVE6O6-c9lTglyBbU4XiWtnRo4biQvVUiPAjFRTx_dMska7cZvo2n5wVx6vsw9buopgLeWV6JCTWVBWywPSE1Xj4Pj_XrAv8vCDTnr5j-pjdknDx7oHlB9gd3OMSwVzSZdey2W1mHWgzU_UpKRJgSemQcH8wz2YLs1xs_PeKvbzRcvLHVhrPQVh9jv4auTQC9Z5jZ9SjgTWYwHi9a8F5OsDOnDNYkb3NMKZrtpPboQhSbuNvCex_Z91-p48yqg7htJutOnPrvhj6B2MjswHHb08V-I9haWBVolYFzaqXpXDE--REa-OXFIfupCMC7zzURWi7vstPxip6uvzBqMLuI_hCb-__wG4amjxZKMyyOj2rLMJOWRnsEaj5DqATos9K7SBWwnxqCDxmTg-L3iQKW83bCt-44GFaSNpscyVtZD2HTYRtW3ZWznztGnnwpDzN1SyoWYxXndC-GrIEbwO-vZL44LSIHJSFd1O6jv1wiETmCLiQWea-7HNN1m_tnCUlbGmxu_f3cQy1ehpnkPrR_NzSNmb18YgtL-ruGCFFTmE3AQpS9RtDri0wyPGVrdU8_fTo79fzLCcBwd9zDMdm-o9esoWbJ_nxouLGrB429mM50AQ2TO3vTUXby6edud7sM9TxaOqi4Ctx3LJl1cUdzbcOcermufM76jZAJidOJf7u-jWa8ixC-rUFTKosFI1GYIRtjlLeebVFOD4FcVVN1Niu-H91ZkOz4664zTJDEu3aBOTX2Dg92NMDpE7DtCiAwiFasxePZdNagQE0X-QqkqhuT4LWdiFqiBaBuNzHJDNvWIPBZesO_lPlQxEkoo-2hPUCoz170izPgoXgspTv4FoeKaXhgsGz_MM6Wgi919iaQ389_H9DP_TslMdgnxAJeIEOWkcyHhSqzs1iJ27yK_zm0YuKu8EEPU7jp7ZhUhLy5pWudGTf3V-c3Vtq6mb3XpH1GsXPwBEd4fz32ja2pm_B_msdtAhnpiw_uLM3th_W9KC7BpUcs-0GcejFqBVI-Bjy0qGjFdl5KDuKMpSLpw5K6IKpzkKLM3O2M_AHQWKIGLp9G1p3eXUIxq5DOs1sNH1_yKzdaNSlE1Fqmh8YbJ_ia3MEGhyB7cOXOMx55HsYsSvghStKDGlvbOIKq-4WeL8VR309dMET3Zis7F0JAvHTVbVrpBCRuBYoSZQCH8irles5F9ZI1epnFf68m3T7Dc>",
      },
    ],
    companyName: "dazn",
    companyLogo: "https://logo.clearbit.com/dazn.com",
    unsubscribeLink:
      "<mailto:unsubscribe@em.mail.dazn.com?subject=https://link.mail.dazn.com/wf/unsubscribe*q*upn=hqJoGkZGK-2Btpx0N4PlW8WibiBa7CNeDJyAo-2FeJwdqQMfznXHvrLeCZ1MKlc4TxL7fTqdghHWn5hWI6Z5mHAeMpTwF6MEj7IOoVmEMZ7juA7FEGXTL7jvkXXqwbRYBGnUzF9OS6uonpxcuL18ViCQ4NsfAiwBqSUrp87ld0RDcMzUv6Ur8nYrQKZf05rKlCEkvZSVTQ93R5N61TEVITkIhWPu6wbht4GRkEo-2BenisLlQ1U1bv0No6ZrxdaXINrEBkTxKjj-2FK04xNtsUjjA3mStqtUqhFLDgAiCHusGPHGti8JBM6xCB0wqY27Byj-2F9paulQI3VrTD7i9FH46TlR3etNuz8HHdntRvfHxFX8O0rVsrwjEOrSCJ7TDfP6eUd7nnokXS9pVI9vUgCIWE1kb1jYx-2BZ5NP2NZ71RW-2FoWuHo9Qj-2BcCRiduVciB1Qo5W-2BEMpY0-2BBDB9HXLKyCzrCRTOudK-2FEf2BXEgi4FsxtcFCzUOkrQDWcpMvFGH1TVXvw8jTn-2FvQFnjJWnrEXlSic75zMMjxzQW6tWB8rR-2FGseDRB00xVmz1jeSfl4NHxYbEawLzJUF5-2BD-2Fh-2B95EMAmCEzYLDeICjCylid-2FynB13-2BB5aG8uHRuyTosVIKBF8ZS4mh067UAv8tucMiRqDRZIGFnXTcjbS5ktkMXduW2BlpjcJNZDxGa6V5c9K4-2BQpjGTcOkgRja3NfTL5kwMZzzZTINyz04Iki80FeVU0YB-2FJuBU2INmzLvzBnt9Y-2Fxz0DrTjnnciIckpuRwEaPpiqh0UFBvjPGpP7gcMmH4U498qEPW6VEYTKZ-2BA3aH5Wj3mFxjdz0zCQcIwF1FVOyuf8bIfF0b6fR4hjULFNhkCnEwHe-2FGoZUd4-3D>,<https://link.mail.dazn.com/lu/unsubscribe?oc=u001.PzNMIOq34d6v4rmeBwA4FhorijISJhdIVaOOiEEIlCS_ZHq0NUJmSnRJzQvEyp8OgGqO4PeUiF9KTW8IH7vjwdB6tdmO4NSuj7uxNlIiqNVE6O6-c9lTglyBbU4XiWtnRo4biQvVUiPAjFRTx_dMska7cZvo2n5wVx6vsw9buopgLeWV6JCTWVBWywPSE1Xj4Pj_XrAv8vCDTnr5j-pjdoMuPT_QvBwPXPbpF1qyZv82enX4wiVcLxsdRHJsNWGpNDVZorVlmn-ovx95RY0qooFXWvzQghQIk36DzJvt6A4nMzwc04i6iN_TxdHw-lRnmdhaxyCB1JU4WR_r2VDCe7IiuX0HrmhtJftTCKEPfHbVA4v4ediIUW1TNoD2YZ0bM1XRvLetOFx9YRRJI2uZUkMxjEtvIEuZ6OJy58LvbrNchnjvHnnnGZCgcbs7OrR_u9rgtKpM6ATdce_ldJSJ2fYtFasspuSW59rPz0f23QT7tEmxmY2ASxy2XFXIBlWEBfUlcNV5az6ZA8es7KkJ3aZoPChMeFZ0haU26129Ip_nJe4c0pW040JLurrBKT9Xq9_riE9aAQ4TYqcN6Kg7dgzoPhpU7dTOmkbTjArpbIwVFFTCnnvPAML5T6uug4uAJepWIbsFjiWoJAQu2qAIVpaXd3bCZDCaIFYqOW_00Ie8GaoZTG_AdYuSwWTT9b1ijUigOIqKeEuEv3ROIocPWrLZcyrlYI4yiLflwvr7wId0birHOd77kYQTmPDsPLedhzIttCYacNFZNlTCj8Rm7CIUQJ5bU7YTede0BNua0CVkTDbfjNyg2ccWaEaGArQDYzrM0JQJvG3YBowDzIXFgnVWE3bpHN-26WhYG-hQpxl79uzypg4BHitYO2VdahmZ2hXgLXAxWkybA7JRI3AssKPD4h_aTfw4qdC2KN4R2VBYS9FlGvFbOAqzmuQQIJjyt2CvWszFUOdVfz-rvrLes_ndYXH-5ef69u4hBusbjQzng5Z9meJzQmLbWiNp8pF05j0bR4bPCJXdmZ1QDG6HEkm-qoimebfmIT_xjGd_ZfYM35iAFJ6N1BpbkMKYYI1eznJejMDNkxTMlJB74I9kJ__9ehHqvOHiCErzgXkMuE1G025bOip0c8kP41bWdTwvuW1_z8D5qp4m91-qvo0Djt2ezZugU-8WurWTLlCni0GTdMoWgO88tw5ijwkpAcVQPk6WGcGmzyf_-_4DY5gN0zF1WhZqJbaVmr0cbXDcuGGi3SRlEw0oFQuNSeS5a37my6F3ugfTarUevSJV0UPfhYpThAB15F-z-oSou5meVTk>",
    emailId: "news@mail.dazn.com",
  },
  {
    emails: [
      {
        from: "Duolingo <hello@duolingo.com>",
        unsubscribeLink:
          "<https://www.duolingo.com/unsubscribe?type=notify_practice&email=80fc46e2e12faa915a368f7ca27d56ab6f0585acImJ1c2luZXNzd2l0aHRhbmlzaGdhcmdAZ21haWwuY29tIg==&utm_source=comeback&utm_medium=email&utm_campaign=resurrection&utm_content=unsubscribe>",
      },
    ],
    companyName: "duolingo",
    companyLogo: "https://logo.clearbit.com/duolingo.com",
    unsubscribeLink:
      "<https://www.duolingo.com/unsubscribe?type=notify_practice&email=80fc46e2e12faa915a368f7ca27d56ab6f0585acImJ1c2luZXNzd2l0aHRhbmlzaGdhcmdAZ21haWwuY29tIg==&utm_source=comeback&utm_medium=email&utm_campaign=resurrection&utm_content=unsubscribe>",
    emailId: "hello@duolingo.com",
  },
  {
    emails: [
      {
        from: "Ssupcreators <startwithvivek@mail.beehiiv.com>",
        unsubscribeLink:
          "<mailto:e1bc1bbd-b8bb-481d-82a4-045056775664+158095b4-79d6-441f-9468-14ea25ccfefd+3a062bc9-8f34-4356-a926-c181ad088741@unsub.beehiiv.com>, <https://startwithvivek.beehiiv.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=3a062bc9-8f34-4356-a926-c181ad088741>",
      },
      {
        from: "Ssupcreators <startwithvivek@mail.beehiiv.com>",
        unsubscribeLink:
          "<mailto:e1bc1bbd-b8bb-481d-82a4-045056775664+158095b4-79d6-441f-9468-14ea25ccfefd+06e2fd87-90de-4d4b-8558-8f5513017846@unsub.beehiiv.com>, <https://startwithvivek.beehiiv.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=06e2fd87-90de-4d4b-8558-8f5513017846>",
      },
      {
        from: "Ssupcreators <startwithvivek@mail.beehiiv.com>",
        unsubscribeLink:
          "<mailto:e1bc1bbd-b8bb-481d-82a4-045056775664+158095b4-79d6-441f-9468-14ea25ccfefd+20184918-784a-400f-a978-cb94ce072ecb@unsub.beehiiv.com>, <https://startwithvivek.beehiiv.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=20184918-784a-400f-a978-cb94ce072ecb>",
      },
      {
        from: "Tyler from beehiiv <product@mail.beehiiv.com>",
        unsubscribeLink:
          "<mailto:a8e88f38-1bf6-4bad-8154-2c897fe51252+158095b4-79d6-441f-9468-14ea25ccfefd+36545226-7128-4f2a-b41b-1e619825241a@unsub.beehiiv.com>, <https://product.beehiiv.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=36545226-7128-4f2a-b41b-1e619825241a>",
      },
    ],
    companyName: "beehiiv",
    companyLogo: "https://logo.clearbit.com/beehiiv.com",
    unsubscribeLink:
      "<mailto:e1bc1bbd-b8bb-481d-82a4-045056775664+158095b4-79d6-441f-9468-14ea25ccfefd+3a062bc9-8f34-4356-a926-c181ad088741@unsub.beehiiv.com>, <https://startwithvivek.beehiiv.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=3a062bc9-8f34-4356-a926-c181ad088741>",
    emailId: "startwithvivek@mail.beehiiv.com",
  },
  {
    emails: [
      {
        from: '"Francis @ Creator Spotlight" <editor@mail.creatorspotlight.com>',
        unsubscribeLink:
          "<mailto:b95740fa-e8eb-44a5-ab87-ddd2c5d6a75d+158095b4-79d6-441f-9468-14ea25ccfefd+2097dbe0-d951-4b69-aa27-bbf84e9487e1@unsub.beehiiv.com>, <https://www.creatorspotlight.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=2097dbe0-d951-4b69-aa27-bbf84e9487e1>",
      },
    ],
    companyName: "creatorspotlight",
    companyLogo: "https://logo.clearbit.com/creatorspotlight.com",
    unsubscribeLink:
      "<mailto:b95740fa-e8eb-44a5-ab87-ddd2c5d6a75d+158095b4-79d6-441f-9468-14ea25ccfefd+2097dbe0-d951-4b69-aa27-bbf84e9487e1@unsub.beehiiv.com>, <https://www.creatorspotlight.com/subscribe/158095b4-79d6-441f-9468-14ea25ccfefd/manage?post_id=2097dbe0-d951-4b69-aa27-bbf84e9487e1>",
    emailId: "editor@mail.creatorspotlight.com",
  },
  {
    emails: [
      {
        from: "Jesse from Beacons <jesse@hello.beacons.ai>",
        unsubscribeLink:
          "<mailto:32.MRTVI43XIFKUIQKQOJFHG52MGV4WETKDIFMS2SCBONRW642XG5DVCSTPMMZEYRTLI5IT2PI=@unsubscribe2.customer.io>, <https://e.customeriomail.com/unsubscribe/dgTswAUDAPrJswL5ybMCAY-HAscosW7GQJoc2LFkGQ==>",
      },
    ],
    companyName: "beacons",
    companyLogo: "https://logo.clearbit.com/beacons.ai",
    unsubscribeLink:
      "<mailto:32.MRTVI43XIFKUIQKQOJFHG52MGV4WETKDIFMS2SCBONRW642XG5DVCSTPMMZEYRTLI5IT2PI=@unsubscribe2.customer.io>, <https://e.customeriomail.com/unsubscribe/dgTswAUDAPrJswL5ybMCAY-HAscosW7GQJoc2LFkGQ==>",
    emailId: "jesse@hello.beacons.ai",
  },
  {
    emails: [
      {
        from: "The Google Account Team <no-reply@google.com>",
        unsubscribeLink:
          "<https://notifications.google.com/g/optout/ANiao5oGpKMU0iczIg54qpAIYIBNCmMxfnu3SfF3otrkaWJac-7MmNBNfiPw5XNIgdWfcuu1LjbY6lmLOEFrTjEJ2B-fGOLrHYlUY0QlZNhyRAZZb3X-FA00IYmYI7PMkrvjOS-A65zYf4AQJamiatBH2mbV-0h7At8Zch37fVBVN8kSd674TgaFdx3dpNaKgA162QD-EbSSBgtwce_38GsTaewvmLYCae7zKtQdk6rF4khwWslyhmLEK_Im_lH-y7THU0xQtwY-EVCJLkcCx82tlt6vs8B_KitI9Fcs4sU?hl=en>",
      },
    ],
    companyName: "google",
    companyLogo: "https://logo.clearbit.com/google.com",
    unsubscribeLink:
      "<https://notifications.google.com/g/optout/ANiao5oGpKMU0iczIg54qpAIYIBNCmMxfnu3SfF3otrkaWJac-7MmNBNfiPw5XNIgdWfcuu1LjbY6lmLOEFrTjEJ2B-fGOLrHYlUY0QlZNhyRAZZb3X-FA00IYmYI7PMkrvjOS-A65zYf4AQJamiatBH2mbV-0h7At8Zch37fVBVN8kSd674TgaFdx3dpNaKgA162QD-EbSSBgtwce_38GsTaewvmLYCae7zKtQdk6rF4khwWslyhmLEK_Im_lH-y7THU0xQtwY-EVCJLkcCx82tlt6vs8B_KitI9Fcs4sU?hl=en>",
    emailId: "no-reply@google.com",
  },
  {
    emails: [
      {
        from: "Geige from StreamYard <geige@streamyard.com>",
        unsubscribeLink:
          "<mailto:32.MRTVG3LXIFRUCQKQGNXHAQLCHA2TMUKHIFMTSX3ROZLHOZ3OJB5EOZCPKZLHOSBYGF3T2PI=@unsubscribe-eu.customer.io>, <https://e-eu.customeriomail.com/unsubscribe/dgSmwAcAAP3npAb856QGAY9_qvVwgnHzGdOVVwH81w==>",
      },
    ],
    companyName: "streamyard",
    companyLogo: "https://logo.clearbit.com/streamyard.com",
    unsubscribeLink:
      "<mailto:32.MRTVG3LXIFRUCQKQGNXHAQLCHA2TMUKHIFMTSX3ROZLHOZ3OJB5EOZCPKZLHOSBYGF3T2PI=@unsubscribe-eu.customer.io>, <https://e-eu.customeriomail.com/unsubscribe/dgSmwAcAAP3npAb856QGAY9_qvVwgnHzGdOVVwH81w==>",
    emailId: "geige@streamyard.com",
  },
  {
    emails: [
      {
        from: "Fiverr <no-reply@announce.fiverr.com>",
        unsubscribeLink:
          "<https://01.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%2483P7h%2BkGMRPUhSUTMbpn2g%3D%3D%24JXkiPtOH4wfhM3KJn1Z3yam%2FnKfqctAZ7Hz%2BGnQE%2FGhYFroLJYcbYMxuEbgk%0AE5KLLNaQZdVSoWReZxb0qOvAeWnCmoGsMgFRO5PlPRWDHUUGGMpifeX0NRm7%0AcVQNy0h7Qox4cIYC1yXhWuYO6zAANClCGNaxZNtlj6%2Fj3a5kKY8QAkqgLiAi%0AUM0wefRHc7dt%2Bm3NFNqe8IuFsCgvNt81OQGwGnA83Wlj3vvaqzj9UBiokaNH%0AxlDiLvVjI1meb5XSW2xsB1ikac8DSdln7yQ%2BQoX9zu%2FSd6n6jojQb6%2BfWkZm%0AfDOgxaLMWvpxCsCKhCertYY0Yuyj%2FJZqgo3vKxRefzo37DibB66qOzPsNTl6%0AO0MMUPr2JnDpCx5MR9bKN18q&1=1>,<mailto:4_lp5e66t431n5y2z3wxlxw870s6dfef0o97w9fxym9uhp8f1jzuyb9z@unsubscribe.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44aul0svfeaou8g7cjaix9cxj6kgobfhexq6k76e2g75y4w49p90ghn2mdicosztil3r5s6xmy4k18v8cio2c6et1d1muevyb0kdwt-DO_NOT_DELETE>",
      },
    ],
    companyName: "fiverr",
    companyLogo: "https://logo.clearbit.com/fiverr.com",
    unsubscribeLink:
      "<https://01.emailinboundprocessing.com/enc_user/list_unsubscribe?d=%241%2483P7h%2BkGMRPUhSUTMbpn2g%3D%3D%24JXkiPtOH4wfhM3KJn1Z3yam%2FnKfqctAZ7Hz%2BGnQE%2FGhYFroLJYcbYMxuEbgk%0AE5KLLNaQZdVSoWReZxb0qOvAeWnCmoGsMgFRO5PlPRWDHUUGGMpifeX0NRm7%0AcVQNy0h7Qox4cIYC1yXhWuYO6zAANClCGNaxZNtlj6%2Fj3a5kKY8QAkqgLiAi%0AUM0wefRHc7dt%2Bm3NFNqe8IuFsCgvNt81OQGwGnA83Wlj3vvaqzj9UBiokaNH%0AxlDiLvVjI1meb5XSW2xsB1ikac8DSdln7yQ%2BQoX9zu%2FSd6n6jojQb6%2BfWkZm%0AfDOgxaLMWvpxCsCKhCertYY0Yuyj%2FJZqgo3vKxRefzo37DibB66qOzPsNTl6%0AO0MMUPr2JnDpCx5MR9bKN18q&1=1>,<mailto:4_lp5e66t431n5y2z3wxlxw870s6dfef0o97w9fxym9uhp8f1jzuyb9z@unsubscribe.emailinboundprocessing.com?subject=Unsubscribe%20pnrcgsq2gccuv18pj3dmctm1yroq15qrwjha32kojlvcikfu28ycbj90tnwovcfd&body=DO_NOT_DELETE-2e44aul0svfeaou8g7cjaix9cxj6kgobfhexq6k76e2g75y4w49p90ghn2mdicosztil3r5s6xmy4k18v8cio2c6et1d1muevyb0kdwt-DO_NOT_DELETE>",
    emailId: "no-reply@announce.fiverr.com",
  },
  {
    emails: [
      {
        from: '"♟Chess.com" <hello@chess.com>',
        unsubscribeLink:
          "<https://tracking.chess.com/e/encryptedUnsubscribe?_r=db56590e2eee4b8283e2c7a1b93b2241&_s=48839bff537341e1bd05333b8291b2a3&_t=D-dcf1z9xRfLLCl7XJwcanIONCsFDJRIx0-7RKtUrjsmHqLPKO6rx-hmFgNofRrHzM-ZS5mwGMErWDn1Fajmi7UUcD9sXIpsbZymgWW1XGndZQKslvTCw19hdEGcbKX9>,<mailto:unsubscribe+9808199+13005059@unsubscribe.iterable.com>",
      },
      {
        from: '"♟Chess.com" <hello@chess.com>',
        unsubscribeLink:
          "<https://tracking.chess.com/e/encryptedUnsubscribe?_r=db56590e2eee4b8283e2c7a1b93b2241&_s=3899789348934f3889d06bfa3d6aaceb&_t=UE9KmY3oIaqvYnRbxDtqbvynkD8G6d4pB9aheoDBneHVdnsJU4IzobBpDcjN_NbejmmccF99B5MSu0K2kDthnPZCpkIzqUTX_em-HNj_shC7e0916KsLKI5sB0L8zBAs>,<mailto:unsubscribe+9806696+12989786@unsubscribe.iterable.com>",
      },
      {
        from: '"♟Chess.com" <hello@chess.com>',
        unsubscribeLink:
          "<https://tracking.chess.com/e/encryptedUnsubscribe?_r=db56590e2eee4b8283e2c7a1b93b2241&_s=7eca660cc2a841dfa2c175ab7f254396&_t=x-3ofPAhd5KlzFdCe8o13BPtnEZaAZqeX7l_PP07AegCcePqeGHBcqUL-PqoistIa-C6-FNLDn_aeHhKjJV9t2tYN2U-_OPsKLL4gzQ6y5cpj7AqeLTWESN2u01nxBg7>,<mailto:unsubscribe+9832188+12982178@unsubscribe.iterable.com>",
      },
    ],
    companyName: "chess",
    companyLogo: "https://logo.clearbit.com/chess.com",
    unsubscribeLink:
      "<https://tracking.chess.com/e/encryptedUnsubscribe?_r=db56590e2eee4b8283e2c7a1b93b2241&_s=48839bff537341e1bd05333b8291b2a3&_t=D-dcf1z9xRfLLCl7XJwcanIONCsFDJRIx0-7RKtUrjsmHqLPKO6rx-hmFgNofRrHzM-ZS5mwGMErWDn1Fajmi7UUcD9sXIpsbZymgWW1XGndZQKslvTCw19hdEGcbKX9>,<mailto:unsubscribe+9808199+13005059@unsubscribe.iterable.com>",
    emailId: "hello@chess.com",
  },
  {
    emails: [
      {
        from: '"Frame.io Support Team" <team@email.frame.io>',
        unsubscribeLink:
          "<https://assets-api-us.ortto.app/-/m/s/unsubscribe-header?k=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGZCAvjV4sPXzvHwcUAMQA>, <mailto:request@prod.unsubb.ink?subject=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGZCAvjV4sPXzvHwcUAMQA>",
      },
      {
        from: '"Frame.io Team" <team@email.frame.io>',
        unsubscribeLink:
          "<https://assets-api-us.ortto.app/-/m/s/unsubscribe-header?k=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGY9HYO-CtXjjZqZqQxNpQ>, <mailto:request@prod.unsubb.ink?subject=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGY9HYO-CtXjjZqZqQxNpQ>",
      },
    ],
    companyName: "frame",
    companyLogo: "https://logo.clearbit.com/frame.io",
    unsubscribeLink:
      "<https://assets-api-us.ortto.app/-/m/s/unsubscribe-header?k=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGZCAvjV4sPXzvHwcUAMQA>, <mailto:request@prod.unsubb.ink?subject=C2ZyYW1laW8yMDIxAGWAdcZffAStpVE2MGZCAvjV4sPXzvHwcUAMQA>",
    emailId: "team@email.frame.io",
  },
  {
    emails: [
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://manage.kmail-lists.com/subscriptions/unsubscribe?a=Jchkiv&c=01H9R2DBEVRNM4VESZVFBRDQDE&k=309a7ecd5539a73db43c35b2a234f31e&m=01HXJ99WH9ND1YKWABFB55C8CK&r=3ehktEYp>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://manage.kmail-lists.com/subscriptions/unsubscribe?a=Jchkiv&c=01H9R2DBEVRNM4VESZVFBRDQDE&k=309a7ecd5539a73db43c35b2a234f31e&m=01HXJ8RYQPZ96PZ6DYAFKJ9CKY&r=3ehikRde>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://manage.kmail-lists.com/subscriptions/unsubscribe?a=Jchkiv&c=01H9R2DBEVRNM4VESZVFBRDQDE&k=309a7ecd5539a73db43c35b2a234f31e&m=01HXHGMGE2CA9PD0QRY26843R0&r=3efRhP8X>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://event.webinarjam.com/unsubscribe/webinar/8yl69anyg5>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://event.webinarjam.com/unsubscribe/webinar/8yl69anyg5>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://event.webinarjam.com/unsubscribe/webinar/8yl69anyg5>",
      },
      {
        from: "Pat Walls <pat@starterstory.com>",
        unsubscribeLink:
          "<https://event.webinarjam.com/unsubscribe/webinar/8yl69anyg5>",
      },
    ],
    companyName: "starterstory",
    companyLogo: "https://logo.clearbit.com/starterstory.com",
    unsubscribeLink:
      "<https://manage.kmail-lists.com/subscriptions/unsubscribe?a=Jchkiv&c=01H9R2DBEVRNM4VESZVFBRDQDE&k=309a7ecd5539a73db43c35b2a234f31e&m=01HXJ99WH9ND1YKWABFB55C8CK&r=3ehktEYp>",
    emailId: "pat@starterstory.com",
  },
  {
    emails: [
      {
        from: "Tod at Pipedream <sacerdoti@pipedream.com>",
        unsubscribeLink:
          "<https://email-actions.pipedream.com/unsubscribe?ep=1&l=722d1388-f78c-11ee-9155-61c3796c8eef&lc=90e0f984-f827-11ee-90e1-49979cf9c3cf&p=c6865356-0e4b-11ef-8637-f534544677f5&pt=campaign&pv=4&spa=1715363832&t=1715369723&s=b930247827e27bfcd76d2b5eb50f4937bc102fdc8bfd618a05729e80a98d6384>",
      },
    ],
    companyName: "pipedream",
    companyLogo: "https://logo.clearbit.com/pipedream.com",
    unsubscribeLink:
      "<https://email-actions.pipedream.com/unsubscribe?ep=1&l=722d1388-f78c-11ee-9155-61c3796c8eef&lc=90e0f984-f827-11ee-90e1-49979cf9c3cf&p=c6865356-0e4b-11ef-8637-f534544677f5&pt=campaign&pv=4&spa=1715363832&t=1715369723&s=b930247827e27bfcd76d2b5eb50f4937bc102fdc8bfd618a05729e80a98d6384>",
    emailId: "sacerdoti@pipedream.com",
  },
  {
    emails: [
      {
        from: "BudgetBakers <info@t.budgetbakers.com>",
        unsubscribeLink:
          "<mailto:unsubscribe@e.t.budgetbakers.com?subject=https://linksg.budgetbakers.com/ss/su/u001.nQJD0kZHEB63nHA350NnGA/468/lJ13nZv4S8yD2H1xORWesA/um/h001.PZrXDbsQrAjFHKwhIkbxcxPzKOWlwSxxhWpQYVMnFrc>,<https://linksg.budgetbakers.com/lu/unsubscribe?oc=u001.PA5XJtgqzh2--wvDmLLzRDcclpFcJaIpHMbdQd6BOI5tNKcGQhvI_PXc7CBh1Dbd3onL4eT0wl45Mm_AEh14IvJ56ZrQudvE1eO1DHODQrs6UhHmV4w26Np5FAcEFuhegs3YX4Px2BTAKulxSSYCOmj67vFklt0sis1SE-9BqW26DQPzBcwqk_jNC33FlT4qbBC9ZuFlFrGciiKR7AVV7Q>",
      },
    ],
    companyName: "budgetbakers",
    companyLogo: "https://logo.clearbit.com/budgetbakers.com",
    unsubscribeLink:
      "<mailto:unsubscribe@e.t.budgetbakers.com?subject=https://linksg.budgetbakers.com/ss/su/u001.nQJD0kZHEB63nHA350NnGA/468/lJ13nZv4S8yD2H1xORWesA/um/h001.PZrXDbsQrAjFHKwhIkbxcxPzKOWlwSxxhWpQYVMnFrc>,<https://linksg.budgetbakers.com/lu/unsubscribe?oc=u001.PA5XJtgqzh2--wvDmLLzRDcclpFcJaIpHMbdQd6BOI5tNKcGQhvI_PXc7CBh1Dbd3onL4eT0wl45Mm_AEh14IvJ56ZrQudvE1eO1DHODQrs6UhHmV4w26Np5FAcEFuhegs3YX4Px2BTAKulxSSYCOmj67vFklt0sis1SE-9BqW26DQPzBcwqk_jNC33FlT4qbBC9ZuFlFrGciiKR7AVV7Q>",
    emailId: "info@t.budgetbakers.com",
  },
  {
    emails: [
      {
        from: "Medium <hello@medium.com>",
        unsubscribeLink:
          "<https://medium.com/me/email-settings/443ce5815cd2/gE7Rt7AXfqKx7oYQewsQi6N0N-8wEP7uqi2faATwK_I*?source=mktgemail-443ce5815cd2--edition.user&type=topicDigest>",
      },
    ],
    companyName: "medium",
    companyLogo: "https://logo.clearbit.com/medium.com",
    unsubscribeLink:
      "<https://medium.com/me/email-settings/443ce5815cd2/gE7Rt7AXfqKx7oYQewsQi6N0N-8wEP7uqi2faATwK_I*?source=mktgemail-443ce5815cd2--edition.user&type=topicDigest>",
    emailId: "hello@medium.com",
  },
  {
    emails: [
      {
        from: "Ant Wilson <ant@supabase.com>",
        unsubscribeLink:
          "<https://subscriptions.pstmrk.it/unsubscribe?m=1.uZEc7WMBApFqNygTH-l0wA.LsXXkp_0_tx1wpJlLu1GRz-dnTKAFd942_204FGofkZK9ojISxU3x_mp6eZDANcohkmT8umd_H7nDHeJfu95tDdv9ekbt8s3XfOnbOcc5fp-JLNe9E9dTF94tAia0Bki-OXvKHMCKNXmGddAfWNC3OMzjjxcLxAZ-JKTSp1a85KSIN0l3biwuj-uEW1KcdNTq_KCekBEHJQI6jhnaWmXu3ZidDyu_sp-r4O97hqLFc8SrlsiSJuxC_Xzvm_0_nY5gfiNP8xFwLItXw4i7sULFii7mcAvarB6YLPR_YdCqOsKRvICehmLVBd0m2iO9rqQ2VsQRHWKXnUqDhpZ0J9RTVemzZwafcfWOUeX_aMLosRgSWMBU_jAkcurmp6hQMlF1peBjVEMx0v8wp4AKdcLlZnHVv4kV99tduXHw3yX4hrxMsbjwwNwTaE6EC46ijtVotn7MQgMOegpQc7CxIC3HmEjfTvo2PaavrZbsLpT7CDLuaxsAynkVIk6lOwWzUkxKNR0EdOjWAcBoofhvMWzJaGORIPDrg-fzFd4qmYyAOCVeykD7wmnEZmRKd1HbfN64-LaC2_ddabFEIqW252CQg>",
      },
    ],
    companyName: "supabase",
    companyLogo: "https://logo.clearbit.com/supabase.com",
    unsubscribeLink:
      "<https://subscriptions.pstmrk.it/unsubscribe?m=1.uZEc7WMBApFqNygTH-l0wA.LsXXkp_0_tx1wpJlLu1GRz-dnTKAFd942_204FGofkZK9ojISxU3x_mp6eZDANcohkmT8umd_H7nDHeJfu95tDdv9ekbt8s3XfOnbOcc5fp-JLNe9E9dTF94tAia0Bki-OXvKHMCKNXmGddAfWNC3OMzjjxcLxAZ-JKTSp1a85KSIN0l3biwuj-uEW1KcdNTq_KCekBEHJQI6jhnaWmXu3ZidDyu_sp-r4O97hqLFc8SrlsiSJuxC_Xzvm_0_nY5gfiNP8xFwLItXw4i7sULFii7mcAvarB6YLPR_YdCqOsKRvICehmLVBd0m2iO9rqQ2VsQRHWKXnUqDhpZ0J9RTVemzZwafcfWOUeX_aMLosRgSWMBU_jAkcurmp6hQMlF1peBjVEMx0v8wp4AKdcLlZnHVv4kV99tduXHw3yX4hrxMsbjwwNwTaE6EC46ijtVotn7MQgMOegpQc7CxIC3HmEjfTvo2PaavrZbsLpT7CDLuaxsAynkVIk6lOwWzUkxKNR0EdOjWAcBoofhvMWzJaGORIPDrg-fzFd4qmYyAOCVeykD7wmnEZmRKd1HbfN64-LaC2_ddabFEIqW252CQg>",
    emailId: "ant@supabase.com",
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/email-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {data.map(
        ({ companyName, emailId, companyLogo, emails, unsubscribeLink }) => (
          <ListItem
            title={companyName}
            email={emailId}
            companyLogo={companyLogo}
            numberOfEmails={emails.length}
            unsubscribeLink={unsubscribeLink}
          />
        )
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
