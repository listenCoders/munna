const mainGrid = document.getElementById("mainGrid");

const aiData = [
  {
    title: "ChatGPT",
    image: "./src/image/chatgpt.webp",
    description:
      "ChatGPT, developed by OpenAI, is an advanced AI chatbot powered by models like GPT-3.5 and GPT-4o. It can generate text, answer questions, and assist with various tasks.",
    link: "#",
  },
  {
    title: "Gemini",
    image: "./src/image/gemini.webp",
    description:
      "Gemini is Google's AI chatbot, which combines language models with web information. It's useful for answering queries, providing recommendations, and more.",
    link: "#",
  },
  {
    title: "Perplexity AI",
    image: "./src/image/Perplexity AI.png",
    description:
      "Perplexity AI focuses on research and experimentation. It's a versatile chatbot that can handle complex prompts and generate creative content.",
    link: "#",
  },
  {
    title: "YouChat",
    image: "./src/image/YouChat.webp",
    description:
      "YouChat is an alternative to Copilot, offering similar features. It's designed for chat-based interactions and can assist with various tasks.",
    link: "#",
  },
];

for (let i = 0; i < aiData.length; i++) {
  const element = aiData[i];
  mainGrid.innerHTML += `<div class="col-lg-3">
          <!-- Card -->
          <div class="card">
            <img
              src="${element.image}"
              class="card-img-top p-3"
              alt="${element.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text text-truncate">${element.description}</p>
              <a href="${element.link}" class="btn btn-primary">See More →</a>
            </div>
          </div>
        </div>`;
}
//  About Us
 const information = document.getElementById ("information")

 const critorsdata = [
{
  title:"Majharul Islam",
  image:"data:image/jpeg;base64,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",
  description:"He is main developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus quidem veritatis labore et facere ex harum est consequatur, quod molestias aut ab, magnam, dicta eum accusantium explicabo numquam optio inventore deleniti. Asperiores quisquam earum ipsum dicta magni, sit harum odit. Fugiat dolor quod doloremque libero aliquid modi facilis eaque.",
  link :"#",
},{
  title:"Sabid",
  image:"data:image/jpeg;base64,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",
  description:"He is main developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus quidem veritatis labore et facere ex harum est consequatur, quod molestias aut ab, magnam, dicta eum accusantium explicabo numquam optio inventore deleniti. Asperiores quisquam earum ipsum dicta magni, sit harum odit. Fugiat dolor quod doloremque libero aliquid modi facilis eaque.",
  link :"#",
},{
  title:"Hasan",
  image:"data:image/png;base64,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",
  description:"He is junior developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus quidem veritatis labore et facere ex harum est consequatur, quod molestias aut ab, magnam, dicta eum accusantium explicabo numquam optio inventore deleniti. Asperiores quisquam earum ipsum dicta magni, sit harum odit. Fugiat dolor quod doloremque libero aliquid modi facilis eaque.",
  link :"#",
},{
  title:"Tanvir",
  image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERISEhIWFhUVFRcWGBgVEBUXFRYVGBYXFhgXFhUYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OFQ8NFTEeHyU3Mzc3NzcrKyssLzc3Ky4rNzcrNywrMzYrLDc3NzcwMys3Mzc1NywwKy03LDM3MCsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYHAv/EAEMQAAEDAQUEBwQJAwMDBQAAAAEAAgMRBAUSITEGQVFhEyJxgZGhwTJysdEHFCNCUmKC4fCSorIVJDNTwvEWNENkc//EABcBAQEBAQAAAAAAAAAAAAAAAAAEAwL/xAAgEQEAAQIGAwAAAAAAAAAAAAAAAgEDBBESMZHwIjJR/9oADAMBAAIRAxEAPwDWIQhAIQo88UjsmyNbz6Mk+bqIPVstbImF8jg1o3n4AbzyXLNpdoX2yTC2rYmnqt4n8TuJ+HitNtnFHZoDI9zpp3nBF0h6rXHVwYMqAZ51FaLJbK2DpZhXMNGInkP3+KC3stjEEVfvOCqGxmR+WgV3tDNQHwHaf2C9XbYsLKnXDU9pzp4UQZ284Q0U3nJSLoaWxPf4dv8AKJi9gXShvf6/BWkkWCyMG9xr4kn0CCiP3jzCfvltLPHzLT/aVDjfVrveVzf1nrZ7KBvy8Gt+aCku6GokPBjvgnbii+0A7fgp922ekbj+Jp805c8FJh2nzyQS7aKOJ5DzCztiBcStFtQcDGn8oHe19PgCqnZ+KpKAtNmLKOGhCjzs0cFrLZd9YG8S3E3sBLXfBvisw0bj2IGInmuId611kPTMEjfaGThz/f5rJxjC7kVYXXeJs81Dodx0PLtQWF5xFpbaI/aZmabwNR2qRhD2iVlMLszTdXPwVjesYbgnZnHJ7Q4OVHck4ilkhObK4mjjG45t7j6INfsvbMP2Tjkc2+oWkWRNlLM2mtOs08W/MLS3daxKwO36HtQSUiVCBEIQgEIQgEIQgEoSKLe1tEEEsx/+NjndpAqB4oOYbc3l9YtzmA1ZB9mOGPWQ+PV/StPshd3RxSPIzdQdwFfVYfZ6zVd0kuesjzxGbjXmfVdMbJ0NhL3aiMuPvOzPmaIMVfL8doiiHN7vHCPXxWtbZuqeZ8hl6LEXE4ve60u32iKJvugOc7zwrou0TxBZnu3hpA5kCnxoO9BhroshntEj6e08tHYP2AVhtXEGMa0aAkeAHzU7ZdjbPZnzP0jYT4Cp7/mqaa2OtNiimfTE6SWtBQZPwjyAQZGyZtPvFbWyRCRtmroyCeQ9pJA8yFlrDZiG05rU06Gy2x29kPRN7SM/OiCJBKz6rZBljlYcuNG1KlGylojeN7XD4keixtpncGWYtOcbW07aNy8l0q7C202Jj2fdPeM8wewHyQUW1cfSQ1H4ie5wafUqBsgzriu/1aVZyR4oWg8aHwcz40UfZ2Ghrwp4hBd3xJ0Ys3JhJ7HOJp4VWfvq7sD8Q9l4qDyOivp5BPNPDXNrW4eWHL181FsMgmidA/22E4a8OHd8kGfksuKMkasOfYf3+Kcv+x44YZd7m0PvNq30VrDZ8Dhi9l3Ud2HJI+zkwywnWJ9R7rvTf3oDYy9BNG+yTGhIoK8dxHNU97RugmY45FjsJ7DqoFtgdG5r2ZOB1HJW1ttotdmLz/yxAY/zNrQPHjmg1N2Xm0NDXaA1B4V17lPin6B+NvWifrT7qxdxWjEwtPtM82rbXB0M8ZBaMTcjQkEtOlaa7x3BBeQTteMTSCOXrwKcVY2442mrHSMP5X/MKfEwgZuLu2noEHtCEIBCEIBCEqAVJtpIBYpwfvANHMkj5HwV2uefSNe5dKLM3RjWvfzc9wDR3Nr/AFIKMODYsI9qVzWdxcAfKq0f0i3j0dkjhb7UlCewfushZX4rZZ27sRJ/S0+tFZ7USdPOzfRoHmfSiCRd1l6OwWfiH9Ke+Rw9QtDt5bQ4RxjQuz7jU+dPBQp2f7Zrf/rBw7Q5r/mqe9bVjlaSd4A+KBzaO34LCIhrI4A9lan4BeNn3YruLN8cpPc7P4lUe0toxPYwaMb5n9qK52NHUlYfZkBDfejz9fJB4scVDXg5N3/bqWVzK5yyAnsHWPnRTJW0jkdwJ+Czd6PxlvBop8/5yQPzwj6tGd5Pwqp2xt+GyzYXn7GTJ4OjTuePXko1u/8AbwD3vioYiQdAvOz4BaQ3MD7VlNCD1xTvaq65yMZ55/zxVdcV8YWPs8pJHRPbG7hUVDDyrpwrRP3W/Mf/AJn4AoINotzoLaJ88JNe1hyI7aKZtZWGSK1QnqvzqNK09QfJSb8ugugFB1mAOHMUzVHBbMdmdZn8MUR4EZ4fj4oNRZLUy1QF7dT7Q3tfT4FR458UrCdZGGN3vNGXwCxl1W+SzvEke/JzTo4cDz5q4vG3Nq2eI9UuDwDq1wpiaeYNED94x9ZvvUVJZXFjiRvBaRxa4UIV7e0gL6jSuIdlKj4rPl2aCTBaHROZI3MgUI/ENCCtvd13zwmOaAdIxzQ4EZ1a4A4XjWvPksWG1YOx3qthsjfphayKWvRkZEg1Z2cWoNlYrS57auicw8DTyNfRSEB1QCMwcwdxCEAhCEAhCECoQhAq4vecpltFsmO+QU91ry1v9rWrslofRjjwaT4Cq5RHYCLHaHn2sMTj+p1fg4IKa75P97H2O81dQurMTwy8P/CzlmkpbIzyHm0lXVlf9p3nzqUGgjtOIRt4Rhnc5hZ/3BZiaWssQ/Nn5K0MtP6T5UVJb/bxDeT6IIclXvc+lcRyHaaNHwXQLpuoiFrWe1E0v7SM3eNSstctnBe0kEhprkCet90UHj4LqNx2iGNvXdhJy6zHjLvCDn1+WgNje0ffe0j3SPnRUT46rQ7XwRYpRE9rgyjmlrgerUPp4FUzWoPNrdURDh6k/Je2xonZQs7VKaxBBkZmTwa4q72fBdIOQ/np4quljyPMtHdWp8qq+2ZsslXODBSlQS+gzpWoAJ0Y0/qQbK2WH7GN4Gjc+wrmd/3Z0Upwjqv6zeTt7f5xXW2QWgwtGKEDAMuie86ccbfgsvfN0Oe0tc5p3g9GRQ7j7RQc2Mda8/jvUd1Wg00Oo+B7VZWuAsJqKEGjhz4qC/NyB9trxMad4bh8MvRQZJU1IC2pB3n+eSYdJUIL6xSVYK/gd5grrd1WFhssDXsa6kTPaaDnhBOq45YHdQ+58h6rtl1OrBCeMTD/AGBA5ZrK2MUYCBwqS0dgOncnUqRAIQhAIQhAqEIQeLQ2rHDi0jxCyV9WMMs9vYB7Fmh/sY35LYFVV8WXFFbfz2c+OB49Ag4cHf7hp93/ABCvWSdcnt9Vm431kB7PRWgtBxBrdfVBaietDxD/ADBKiSMJDOP/AIqlZkAPwup3HJPNHWBJoBqTuCDV7I2AVBOg8zvXRrFFQLiM992jC76q9wZGMT3YWAUqADUiupApvVab2tj8zM414k+QQdi2suATvdUDrx0BIB67ag99C0/pK5dG2hodQPgku3aK2Wd7XvAe0HR0srQK5VBDqDtII5KZb3h0gfgdGXVJY8glriMRAcAA9p1DgPMIIchxSAcAFYNaq2xCr3H8x8slbxhAyYauaBqdO05D4k9y3d1WPDDkNciagUGlakjIDyAVHcl24jjcNdOTd57937qNt1NOHtgjJrgD+jbQCOPQOkedCdw1A7aIN1adqLNGKOlaBuw4njxAp5qltO1Vhfl9YaDzDh50ouRMu+aUF5OvEnzOqm/UAAKtFaZ5b0Gu2gs8czTNC9jy0dbA4Oq3WuW8LJGIajen7xsI+rx2mEYHB3Rvw1AJ0rlpuy5psNyA4BBU3kDiA3a96iOeulbF3YHdJOYhIW9VocRhGVScxmTWncq76TbiijZBa4GYGymjwBQYiMTXU0bUBwPYEFLs7ZjK2RjRV3QPLRxLXMOXcCuu7MurY7NXXoYx4NA9Fh/oxu7OGeuRZO3va6ID/Iro8EQY3C0UArQDdUk+qD2hCEAhCEAhCECoQhALxav+OT3Hf4le1WbU2zobFaX7+jc1vN7xgaKb+s4IOE2GxOfFLKPZhbGXfre1jR5k9ydBIkaQNCD5gZeK6jcmxxjuqazuFJrQwudX7rwKxsJ/KQK8y5YHZWcR26ymUUaJQHBwpTEC0VHIub4IHZR1nDc4VHw+XivUdiE7o2OLgHOAJbrnlkN+asdq7t+r2hzQOrXE3hhdw5bv0jiq2F9DwzqDwKDRRbLmC67TjcC4yxvcW/8ARY9ufhiNORU+y7EFjA9xxUochu58Cr+6J47dZ8ROGSmCTBQGtKGopRzSM6EEeCdgue0xNDIbYcAyAlha8gbhiBGQ0zB0QUF87LAWUzFwFaDDTMh2/t304Jm/rmdBYIXSULogwV39YGrT3rUsuGaRzDaLV0rWODhGIGsZUccJFe8Kz2hsDZYM2l/RnpGxtFekkDXBjSOGJwP6UHGLqiIAB1qa9talaq4bodN1yPs2mnvu4DlxKcuTZN75OirpTpnjRg1MbD9550J7d2vTrNY2Rta1jQGsFGjcB8+aCpuy6t7su7+ZKXeF2wkSyGIPeWOyw+0QDQHjwVkm5Cg5vsrs7jgBOjXFrxo6rSQd3EEKxdsvG4OJLWMzNXvAAHMlWdouEB8kkc0zHyGriJnEbtA40BoKV4ZKDLs5ESDIZJabpJnuH9NaIMheT4BZXQQvLw15kc6lGF7nYWMYDqcJqTuw9qzzgtPtvM1r2Qto1rBiLWgBoccgKDg3/JU9hu8yObiHUrV3No1Heer3oNfsq0xxQtqRibVzd2JxxV7RXyS7X2cTQ2SyhtTLKH00DY42lznchm0fqVhZLAA3pZXEAVJblhDab8q5jdwNFMsUBdI6eQUc4BrG744hmAfzOOZ/SPu1QVmw139DY42HMh0udM6GR3oB4LQJmxwdGwMG6vmSfVPIBCEIBCEIBCEIFQhCAXiSzteW4mg4TibXQOGjqcRuO5e0oQe1yz6T7jbC5toYKNkeQ7k9xL/Ml58eS6ks19ItkdLYHsY0ueZIQ1o1LjK1tPMoKC6LT/qMGGRmKWFhqdOkGQFCNHnf++WatNmLHubqGnvp2HPL0XTNktnGWOAMNHSOAMjuLvwj8orl471U7RNhikxWrHhoSyUDFlva6nWJGW48d9EFFs7b8ErXse2N/suxGkUrfwyf9N/B+mWdDUu6dZpS5oJBad4OdO8ZHtCxOys932uV0QaJHNGJjpIyxz2DcPxFnPcRwK3lksTIxhY0NHAaDsGg7kD0SlsTLWp5iBYomtFGgAVJyG8mpPaiOUO0S1XiNlK80DhKakKcJTUiCPIo0jVJcmsNUGIttzwxyST2qQVcd+bYWnJp068zqa0oMzTKpesl7XeHAR4nEUp9lLTLIUxADSgVBtpfDLRL9Vh/4Y3F8rxmJZRlhB3gZ1PEZZDOH9HlzuhvKWKZvWZEJADvBLcJ7g8dhHJB0mzBz+u9uAatYaF1fxPpli4DdzOktKkQIhCEAhCEAhCEAhCECoQhAIQhAoKSRgNK7iD3g1CEIPVVDvWyxyxuErQ5oBJBFRkDXyqFKTdqhxsew6Pa5v8AUCPVBxuwXJPFZbNas4y5xLHg0cz70bjwxdflSnFdN2U2yZaKRTlsdoGXBkpG9hOjuLDnwqrO2WCOWF0Dm9Qtw0G4AZEcCKAjsXP7yuB0totDGmohiYXup7T2wgge8cvAoOthemlcdujbe1WI9HMDPEDSjzSZnIPOtM8neIXR9n9qbLbB9jJ1qVMbxhkH6Tr2ioQW9rme1tWMxmoyxBuW81I8lG+uy5fZNHbKa+GBTgUhaCggyTWj7jYjyc54ryxAZdtCpztEKn2h2ks9jbWZ/WIq2NvWkd2N3DmaDmgsn0AqcgM6nQDmue7YbVl7Xw2YnDQYnt9qQF7WYIqZgHFTFqd3FRYr9mvK0YHDo7Oxr5DE01LwwVb0jvvdbDkKDt1Vg/ZZ4ZZ5I8JlY0Oe15oHPa5srRWmmJmHvruzDxdOx3RS2d7yC1rS57QOqJRQtA/IM/6RxWlfdrDaW2nSRsTojpRzHOa8A9hbl7xUtjqgEihI0Oo5JUCIQhAJEqRAIQhAIQhAIQhAqEIQCEIQCEIQCEIQKE3HZ2tx0A67i535iaDPuAHYF7SoMXtNs0+RtqlY0GR80bmN4tDOjIPCpcXH3VgdoLo+rWgQg1dGxhLhX2iMRIOo18l260zYGPefutc7wBPouN7QXoJ7R00jaOcxgOHSrRSufd4ILS4dtbbBRpeJmD7sxJdTlKOt/ViW3sX0gRObWSCZh/K1sjT2Fpr4gLlcNriGuL+lXdlvyzsGeL+hBqry2rtM/Vs7DAw/fcA6Yj8rfZZ5rMz3GOs92Ik5lznlznHi4nMntTv/AKugAybIf0tHxKr7dtdjBayIiv4nD4D5oNZ9GtlAjnlp1jJ0Y91rWuy73eQWxWC+j60ShoJB6N8jg4V++QCDQ9lMuIW9QCRCEAhCCgRCEIBCEIBCEIBCEIBKkQgVCEIBCEIBIhCASpi2WpsTHPcaBor+y5zf1/z2klrC5sdfZZUEjgSMyg2G0l8xshlY1wc9zXMAGdK9VxJ0yqclzS1WEOpnSnJXdia2jI5GmOgoKigp6LRR3NGW0Le9BzwXQ46OHgU8LldvePAq4t8LoJujcNc2nc4fNOtbVBXWLZsOze804AU8yrL/AEeKMDCwVOVTmfEqSZ8ITlyzGWZoOYGfggsrTZnWeyUidhezrVoD1i4E/LsV9c14ttETZBkdHD8LxqPlyIWf2stoZFgHtPPkP3TWykD44y6pGPOlfOiDZIUey2oO6pydTQ7xxbxHwUhAIXiJ1RXiTTs0HjSvevSAQhCAQhCAQhCAQhCAQhCASpEIFQkSOcAKk0HNAqZtVrbGOse7eq62X4AcMQxu4/d/dU8NmkdIZJHVJ5/yiCFeDZ7XIS84YwcmjTuG88yp10XY2Ik69qsGxUCVhQLarOyRuFw+Y7FWxySWY4XdeLcRqPl2K0S0rkcxwQQb0skdshLQRiGbTva75LG26Z9mDWSU6SmgcCaaAmi2Utgc04oTQ8FhtqLvkitAmkOLpDWpNcxQUQR/9Se80wnwJKvtkbwjHTvcaFgaKHImtd3cqb/UKtrWnYpOxd39NPMaZNDTyzqgvI7K60SCWX2dw4/stHjAAAUQsplwyXoCqCYOuKVodQd7XDQhTrBay+oeAHt1APmOR1VZEaL255BDgSDSlRSpGtM/5qgmQyO6oGjcQ11wksApzIr3KYx+45O4V+B3jNVQfQ4m+1vq45inE1odPBSIJHucCaDCKVdnWtM8uzTzKCehMRVxe0ciajIgjcdMs8sqaFSECISpEAhCEAhCEAhCEAhCg3nbujFGir3ZAIC8bxEdGgYnnRoVZeTn4GdLWlauodO5Trtu/BWR5rI7fw5Be58yaoIscMbWgsoa7/3Te9I+y4almQ3t3d3BeY3b0D7tE3GvZOSbjQOJ2NNJ2LRB7IWe25jBsuKmbXinLquWhVftDYums0jN+o7Qg5PCBTrOPctf9F7/ALW0+4z/ACcsbiAqCMwSDyINCrPZq8TZrQx4PVdk4cRX45VQdM6I1XosUioNCMwcweRzCbkCAjYvLmp9gyQWoGompxI3VeZpKaZngEDzJSNEk16dHTEKgndr4JgMceXmV6+rDh3nM+KCystqbIKtPcdfBPKigbgdkrmGWoQOIQhAIQhAIQhAKBDZayukdxo3s4qevLkDM8ihSSKTIFHcxAwXpiQU6w03/NSXsTYO5B4c7JEZTTm4TTdu+S9NKB9OxphpT0aBwFE//G7sSVTNpkox1dACg5BJ1p5xxkeR/UV6ljOHmMwmxlK535z5n91c26zjCHDeg1mxF6dLAGE9aPL9P7H0WicFy7Z22Gz2hp+67I9hXTw+oqgdaMl4c5eTJkvLGkoPTIy7sT5iA0CcjYvZbkgjgUSVqvXRlxUmKz01QR2QZqZGyi9FqjW+2thYXO7AOJ4LO5djbpqls0tWpXJaYbvU1uY12AuzoCR+FpJAc78tRSqkrM2WOS1EvJwFv/G4NBLXHXX2mkZOacjXdu0cEQa0NGg/m/csMNfldzrWmVO8t8Vh42co5517w9pEqFWkIhCEAghCEDbmJp0akoogguiUeSFWbmLwY0FNLHuTLBuKuZLMCo01lQRAnI5EjoqLxRBKKq7/AHkWaYjXo30/pKnMfuUe8osUb28WuHkg5VZ4qtJ/MR5BXMb8UWE6hRrvg6j/AH6/2tUkR0QQ3Q5hb7Z219JC0HVuSxzWLQ7OAtJA4oNGxqnQx0TNmjzzU4NQDQvWFKAvSDy1lF6QhAxb7R0cbn7wMq8TkPNZ6xwmd4a8ufGMRBxjFGTmWSE5ubl1XDPceK0k8DXijmgitaHinGigoBQcgpb2HrdnTVXx+d2V2cTSzCumnl97u8RwhrQ1ooBpROIQt4wjH1TynKXsEIQu3BEIQgEIQgEIQgUJChCDympdEIQQ5FFKEIPKWf2T2IQg5/dvsv7R/iE8UIQKNVpLh1KEINPZ9ylJUIFCEIQCVCECIQhAJUIQCEIQf//Z",
  description:"He is junior developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus quidem veritatis labore et facere ex harum est consequatur, quod molestias aut ab, magnam, dicta eum accusantium explicabo numquam optio inventore deleniti. Asperiores quisquam earum ipsum dicta magni, sit harum odit. Fugiat dolor quod doloremque libero aliquid modi facilis eaque.",
  link :"#",
}
]
for (let i = 0; i < critorsdata.length; i++) {
  const element = critorsdata[i];
  information.innerHTML +=`<div class="col-lg-3">
          <!-- Card -->
          <div class="card">
            <img
              src="${element.image}"
              class="card-img-top p-3 h-12"
              alt="${element.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text ">${element.description.substring(0,50)+"..."}</p>
              <a href="${element.link}" class="btn btn-primary">See More →</a>
            </div>
          </div>
        </div>`
}