enum Authorization {
    User,
    Admin,
    SuperAdmin = User + Admin,
    God = "abc".length
}