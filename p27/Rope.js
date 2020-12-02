class Rope
{
	constructor(bob, point)
	{
		var options = {
			bodyA: bob,
			pointB: point,
			stiffness: 0.04
		}

		this.point = point;

		this.rope = Constraint.create(options);
		World.add(world, this.rope);
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.point;

		strokeWeight(4);
		stroke("yellow");
		line(pointA.x, pointA.y, pointB.x, pointB.y);
	}

}