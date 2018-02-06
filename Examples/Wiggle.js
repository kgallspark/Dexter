function wiggleJoint( joint, wiggle ) {
	var joints = [0, 0, 0, 0, 0];
    joints[joint] = wiggle;
	return [
	Dexter.move_all_joints(joints[0], joints[1], joints[2], joints[3], joints[4]),
	Dexter.move_all_joints(-joints[0], -joints[1], -joints[2], -joints[3], -joints[4]),
    Dexter.move_all_joints(0, 0, 0, 0, 0)
    ]
	}

var wiggles = []
wiggles.push(wiggleJoint(0, 10000))
wiggles.push(wiggleJoint(1, 20000))
wiggles.push(wiggleJoint(2, 30000))
wiggles.push(wiggleJoint(3, 50000))
wiggles.push(wiggleJoint(4, 50000))

wiggles.push(Dexter.move_all_joints(50000, -50000, 50000, -50000, 50000))
wiggles.push(Dexter.move_all_joints(-50000, 50000, -50000, 50000, -50000))
wiggles.push(Dexter.move_all_joints(0, 0, 0, 0, 0))

wiggles.push(Dexter.move_all_joints(50000, 50000, 50000, 50000, 50000))
wiggles.push(Dexter.move_all_joints(-50000, -50000, -50000, -50000, -50000))
wiggles.push(Dexter.move_all_joints(0, 0, 0, 0, 0))

new Dexter({name: "my_dex", ip_address: "192.168.0.142", port: 50000, enable_heartbeat: false, simulate: false})
new Job({name: "j1", robot: Robot.my_dex, keep_history: false,
	do_list: wiggles})


Job.j1.start()
Job.j1.inter_do_item_dur = 125
Dexter.heartbeat_dur = 25


