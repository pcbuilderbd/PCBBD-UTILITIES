const permissions = require(`${process.cwd()}/src/validator/permissions`);
require("colors")

module.exports.parsePermissions = parsePermissions;


// parsePermissions
function parsePermissions(perms) {
  const permissionWord = `permission${perms.length > 1 ? "s" : ""}`;
  return perms.map((perm) => `\`${permissions[perm]}\` `).join(", ") + permissionWord;
}

/********************************************************
  @INFO
    Coded by: Nadid Wasique [DaTaklaCatto#2207]
  @INFO
    Website: https://nadid-wasique.nelify.app
    Discord: https://discord.gg/Mdh23bsrhp
  @COPYRIGHT
    Please mention me if you use this code <3
  @INFO
********************************************************/