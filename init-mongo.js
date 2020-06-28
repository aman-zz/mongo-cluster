db.createUser(
	{
		user	:	"test"
		pwd	:	"test"
		role	:	[
			{
				role	:	"readWrite"
				db	:	"test"
			}
		]
	}
)
