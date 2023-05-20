import React from "react";

function TestPage() {
  const data = [
    {
      article: "nano1",
      issue: "issue-1",
      year: 2016,
    },
    {
      article: "mech1",
      issue: "issue-1",
      year: 2017,
    },
    {
      article: "mech4",
      issue: "issue-4",
      year: 2017,
    },
    {
      article: "mech44",
      issue: "issue-4",
      year: 2017,
    },
    {
      article: "mech10",
      issue: "issue-10",
      year: 2017,
    },
    {
      article: "aerospace22",
      issue: "issue-2",
      year: 2014,
    },
    {
      article: "aerospace1",
      issue: "issue-1",
      year: 2014,
    },
    {
      article: "aerospace2",
      issue: "issue-2",
      year: 2014,
    },

    {
      article: "bio1",
      issue: "issue-1",
      year: 2015,
    },
    {
      article: "bio5",
      issue: "issue-5",
      year: 2015,
    },
    {
      article: "bio2",
      issue: "issue-2",
      year: 2015,
    },
    {
      article: "bio22",
      issue: "issue-2",
      year: 2015,
    },
    {
      article: "nano3",
      issue: "issue-3",
      year: 2016,
    },
    {
      article: "nano5",
      issue: "issue-5",
      year: 2016,
    },
   
  ];

  const yeargroup = data.reduce((datas, article) => {
    (datas[article.year] = datas[article.year] || []).push(article);
    return datas;
  }, {});
  console.log(yeargroup);

  const keys = Object.keys(yeargroup);
  keys.forEach((key) => {
  
    const issuegroup = yeargroup[key].reduce((datas, article) => {
        (datas[article.issue] = datas[article.issue] || []).push(article);
        return datas;
      }, {});
      console.log(issuegroup); 
      // write your business logic here karthi!
  });

  return <div>TestPage</div>;
}

export default TestPage;
