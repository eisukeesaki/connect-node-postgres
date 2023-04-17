module.exports = async function testDBConn(query) {
  try {
    console.log("querying database...");

    const res = await query("SELECT NOW()");
    if (res.rowCount)
      console.log("database query successful");
    else
      throw new Error("failed to do a test query at server start up");
  } catch (error) {
    console.log("failed to do a test query on database on server start up.\n%s", error.stack);
  }
}
