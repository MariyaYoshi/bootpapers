let express = require("express");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let pg = require("pg");
const PORT = 3000;

let pool = new pg.Pool({
  user: "postgres",
  password: "1",
  host: "localhost",
  port: 5432,
  database: "postgres",
  max: 10
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(request, responce, next) {
  responce.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  responce.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/////////////////////////////////////////////////////////////////////////
//////////////////     CLASSIFIERS  API       //////////////////////////
///////////////////////////////////////////////////////////////////////
app.get("/api/classifiers/dest/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_tab_vch();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/dest", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select * from ktsos_tab_vch", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TABLE ktsos
        }
      });
    }
  });
});

app.get("/api/classifiers/persontype/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_tab_dolpod();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/persontype", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select * from ktsos_tab_dolpod", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TABLE
        }
      });
    }
  });
});

app.get("/api/classifiers/tdrc/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_tab_directions();", function(
        err,
        table,
        respon
      ) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/tdrc", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select * from ktsos_tab_directions", function(
        err,
        table,
        respon
      ) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TABLE
        }
      });
    }
  });
});

//   наименование словаря СПИСОК РАССЫЛКИ
app.get("/api/classifiers/lists/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_tab_lists();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/liststr/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_tab_liststr();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/lists", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select * from ktsos_tab_lists", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE
        }
      });
    }
  });
});

app.get("/api/classifiers/liststr", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "select * from ktsos_tab_liststr WHERE lst_key=$1",
        ["ключ из выбранной строки родительской таблицы lists"],
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); // TRUE
          }
        }
      );
    }
  });
});

//////////////////////////////////////////////////////////////////////
//////////////////     JOURNALS  API       //////////////////////////
////////////////////////////////////////////////////////////////////

// наименование исходящие сообщения
app.get("/api/journals/mes-out/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_mes_out();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE parent
        }
      });
    }
  });
});

app.get("/api/journals/recipient/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_recipient();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE child
        }
      });
    }
  });
});

app.get("/api/journals/mes-out-ns", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "SELECT msg_key, c_flgctrl, c_regnum, to_char(ts_timrcvot,'dd.mm.yyyy HH24:MI:SS') as ts_timrcvot, c_podpnum, c_podpdat,c_addrobjtl,c_podpvch,c_podpdol, to_char(ts_timotdot,'dd.mm.yyyy HH24:MI:SS') as ts_timotdot, i2_prc, i2_grf, i2_pri, i2_naddrr, i2_tlgwrd FROM ktsos_mes_out WHERE ((i2_grf like 'Н/С') OR (i2_grf like 'ДСП'))",
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); //  TABLE PARENT
          }
        }
      );
    }
  });
});

app.get("/api/journals/recipient", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "select * from ktsos_recipient WHERE msg_key=$1 ORDER BY i2_addridxr",
        ["ключ из выбранной строки родительской таблицы lists"],
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); // TABLE CHILD
          }
        }
      );
    }
  });
});

//наименование исходящие сообщения важные
app.get("/api/journals/mes-out-s", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "SELECT msg_key, c_flgctrl, c_regnum, to_char(ts_timrcvot,'dd.mm.yyyy HH24:MI:SS') as ts_timrcvot, c_podpnum, c_podpdat,c_addrobjtl,c_podpvch,c_podpdol, to_char(ts_timotdot,'dd.mm.yyyy HH24:MI:SS') as ts_timotdot, i2_prc, i2_grf, i2_pri, i2_naddrr, i2_tlgwrd FROM ktsos_mes_out WHERE ((i2_grf like 'С') OR (i2_grf like 'СС'))",
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); //  TABLE PARENT
          }
        }
      );
    }
  });
});

//     ВХОДЯЩИЕ ТЛГ  (ИМПОРТ)
app.get("/api/journals/mes-in/import", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query("select f_ktsos_mes_in();", function(err, table, respon) {
        done();
        if (err) {
          return response.status(400).send(err);
        } else {
          return response.status(200).send(table.rows); // TRUE parent
        }
      });
    }
  });
});

//   входящие сообщения
app.get("/api/journals/mes-in-ns", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "SELECT msg_key, c_flgctrl, c_regnum, to_char(ts_regtim,'dd.mm.yyyy HH24:MI:SS') as ts_regtim, c_addrobjs, to_char(ts_timcnd,'dd.mm.yyyy HH24:MI:SS') as ts_timcnd, i2_prc, i2_grf, i2_pri, i2_naddrr, i2_tlgwrd FROM ktsos_mes_in WHERE ((i2_grf like 'Н/С') OR (i2_grf like 'ДСП'))",
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); //  TABLE PARENT
          }
        }
      );
    }
  });
});

//     Входящие сообщения важные
app.get("/api/journals/mes-in-s", function(request, response) {
  pool.connect(function(err, db, done) {
    if (err) {
      return response.status(400).send(err);
    } else {
      db.query(
        "SELECT msg_key, c_flgctrl, c_regnum, to_char(ts_regtim,'dd.mm.yyyy HH24:MI:SS') as ts_regtim, c_addrobjs, to_char(ts_timcnd,'dd.mm.yyyy HH24:MI:SS') as ts_timcnd, i2_prc, i2_grf, i2_pri, i2_naddrr, i2_tlgwrd FROM ktsos_mes_in WHERE ((i2_grf like 'С') OR (i2_grf like 'СС'))",
        function(err, table, respon) {
          done();
          if (err) {
            return response.status(400).send(err);
          } else {
            return response.status(200).send(table.rows); //  TABLE PARENT
          }
        }
      );
    }
  });
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
