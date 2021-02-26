const fetch = require("node-fetch")

const accreditamento = () => {
  fetch("http://localhost:8080/accreditamento", {
      method: "post",
      body: JSON.stringify({
        nome: "Matteo Bartoli"
      }),
      headers: {
        "Content-Type": "application/json"
      },
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es1 = () => {
    fetch("http://localhost:8080/esercizi/1", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      const reqData = resBody.data
      const risultato = reqData.toLowerCase()
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/1", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es2 = () => {
    fetch("http://localhost:8080/esercizi/2", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData ** 2
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/2", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es3 = () => {
    fetch("http://localhost:8080/esercizi/3", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.cognome
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/3", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es4 = () => {
    fetch("http://localhost:8080/esercizi/4", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const risultato = resBody.data.length
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/4", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es5 = () => {
    fetch("http://localhost:8080/esercizi/5", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.map(e => e.toUpperCase())
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/5", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es6 = () => {
    fetch("http://localhost:8080/esercizi/6", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.reduce((acc, e) => {
        return acc + e
      }, 0)
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/6", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es7 = () => {
    fetch("http://localhost:8080/esercizi/7", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.reduce((acc, e) => {
        if (e > 5) {
          acc += e
        }
        return acc
      }, 0)
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/7", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es8 = () => {
    fetch("http://localhost:8080/esercizi/8", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.reduce((acc, e, i) => {
        if (i%2 === 0) {
          acc += e
        }
        return acc
      }, 0)
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/8", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es9 = () => {
    fetch("http://localhost:8080/esercizi/9", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.reduce((acc, e, i) => {
        if (e%2 === 1) {
          acc += e
        }
        return acc
      }, 0)
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/9", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es10 = () => {
    fetch("http://localhost:8080/esercizi/10", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      const reqData = resBody.data
      const risultato = reqData.sort()
      console.log(risultato)
  
      return fetch("http://localhost:8080/esercizi/10", {
        method: "post",
        body: JSON.stringify({
          data: risultato
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err))
}

const es11 = () => {
  fetch("http://localhost:8080/esercizi/11", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map(e => e.toLowerCase()).sort()
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/11", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es12 = () => {
  fetch("http://localhost:8080/esercizi/12", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map(e => e-1)
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/12", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es13 = () => {
  fetch("http://localhost:8080/esercizi/13", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map((e, i,  arr) => {
      if (i != arr.length-1) {
        return (e + arr[i+1])
      }
      return e
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/13", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es14 = () => {
  fetch("http://localhost:8080/esercizi/14", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = {
      "positivi" : 0,
      "negativi" : 0,
      "zeri" : 0,
    }
    reqData.forEach(e => {
      (e > 0) ? risultato.positivi+=1 : (e < 0) ? risultato.negativi+=1 : risultato.zeri+=1
    });
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/14", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es15 = () => {
  fetch("http://localhost:8080/esercizi/15", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map(e => {
      if (e.length%2 === 0) {
        return e.toUpperCase()
      } 
      return e.toLowerCase()
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/15", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es16 = () => {
  fetch("http://localhost:8080/esercizi/16", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i,  arr) => {
      if (e != arr[arr.length-1]) {
        acc = acc + e + " "
      } else {
        acc += e
      }
      return acc
    }, "")
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/16", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es17 = () => {
  fetch("http://localhost:8080/esercizi/17", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i,  arr) => {
      return acc + e[e.length - 1] 
    }, "")
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/17", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es18 = () => {
  fetch("http://localhost:8080/esercizi/18", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i,  arr) => {
      if (e.length > 4) {
        acc += e[0]
      }
      return acc
    }, "")
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/18", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es19 = () => {
  fetch("http://localhost:8080/esercizi/19", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    let ris = []
    for (let i = 0; i < reqData+1; i++) {
      if (reqData%i === 0){
        ris.push(i)
      }
    }
    const risultato = ris.sort((a, b) => a-b)
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/19", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es20 = () => {
  fetch("http://localhost:8080/esercizi/20", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map((e, i, arr) => {
      return e.figli.length
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/20", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es21 = () => {
  fetch("http://localhost:8080/esercizi/21", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    let risultato = []
    reqData.forEach((e, i, arr) => {
      if (e <= 5) {
        risultato.push(e)
      }
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/21", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es22 = () => {
  fetch("http://localhost:8080/esercizi/22", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    let risultato = []
    reqData.forEach((e, i, arr) => {
      if (e >= 3 && e <= 6) {
        risultato.push(e)
      }
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/22", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es23 = () => {
  fetch("http://localhost:8080/esercizi/23", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e, i, arr) => {
      acc += e.anni
      return acc
    }, 0)
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/23", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es24 = () => {
  fetch("http://localhost:8080/esercizi/24", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    let risultato = []
    reqData.forEach((e, i, arr) => {
      if (e.cognome[0] === "C") {
        risultato.push(e.nome)
      }
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/24", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es25 = () => {
  fetch("http://localhost:8080/esercizi/25", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, e) => {
      for (let i=0; i<e.length; i++) {
        if(e[i] === "a") {
          acc ++
        }
      }
      return acc
    }, 0)
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/25", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es26 = () => {
  fetch("http://localhost:8080/esercizi/26", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.map((e) => {
      return -e
    })
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/26", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es27 = () => {
  fetch("http://localhost:8080/esercizi/27", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const reqMag = reqData.magazzino
    const reqNeg = reqData.negozio
    let a = true
    reqMag.forEach((e, i , arr) => {
      for(let i=0; i<reqNeg.length; i++) {
        if (reqNeg[i] === e) {
          return
        }
      }

      reqNeg.push(e)
    })
    const risultato = reqNeg.sort()
    console.log(risultato)
    return fetch("http://localhost:8080/esercizi/27", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
} 

const es28 = () => {
  fetch("http://localhost:8080/esercizi/28", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const reqMag = reqData.magazzino
    const reqNeg = reqData.negozio
    const reqMagNeg = reqMag
    Array.prototype.push.apply(reqMagNeg, reqNeg)
    const risultato = {}
    const count = (element, array) => {
      return array.reduce((acc, e, i, arr) => {
        if (element === e) {
          acc ++
        }
        return acc
      }, 0)
    }
    reqMagNeg.sort()
    reqNeg.forEach((e, i , arr) => {
      risultato[e] = count(e, reqMagNeg)
      console.log(e)
    })
    console.log(risultato)
    return fetch("http://localhost:8080/esercizi/28", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
} 

const es29 = () => {
  fetch("http://localhost:8080/esercizi/29", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    let risultato = 1
    for(let i = 1; i< reqData+1; i++) {
      risultato = risultato * i
    }
    console.log(risultato)
    return fetch("http://localhost:8080/esercizi/29", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const es30 = () => {
  fetch("http://localhost:8080/esercizi/30", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const map = resBody.data
    const rows = map.split("\n")
    const h = rows.length
    const w = rows[0].length
    const risultato = {}
    
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (rows[y][x] === "X") {
          risultato.x = x
          risultato.y = y
        }
      }
    }
  
    return fetch("http://localhost:8080/esercizi/30", {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

/*const es31 = () => {
  fetch("http://localhost:8080/esercizi/31", {
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    const reqData = resBody.data
    const risultato = reqData.reduce((acc, p) => {
      if (p.nome[0] === "A" || p.nome[0] === "E" || p.nome[0] === "I" || p.nome[0] === "O" || p.nome[0] === "U" ) {
          acc.nomi ++
      } else if (p.cognome[0] === "A" || p.cognome[0] === "E" || p.cognome[0] === "I" || p.cognome[0] === "O" || p.cognome[0] === "U" ) {
        acc.cognomi ++
      }
      return acc
    }, {
      nomi: 0,
      cognomi: 0
    })
    const re = JSON.stringify({
      data : risultato
    })

    console.log(re)

    return fetch("http://localhost:8080/esercizi/31", {
      method: "post",
      body: JSON.stringify({
        "data": re
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}*/

const voto = () => {
  fetch("http://localhost:8080/voto", {
    method : "get",
    headers : {
      "x-data": "true"
    },
  })
  .then(res => res.json())
  .then(r => console.log(r))
  .catch(err => console.log(err))
}

//accreditamento()
//es1()
//es2()
//es3()
//es4()
//es5()
//es6()
//es7()
//es8()
//es9()
//es10()
//es11()
//es12()
//es13()
//es14()
//es15()
//es16()
//es17()
//es18()
//es19()
//es20()
//es21()
//es22()
//es23()
//es24()
//es25()
//es26()
//es27()
//es28()
//es29()
//es30()
voto()
